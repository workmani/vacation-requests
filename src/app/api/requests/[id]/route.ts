import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { TimeOffRequestService } from "@/lib/services";
import { RequestStatus } from "@/lib/generated/prisma";
import { ensureMockUser } from "@/lib/services/mock-user.service";

// GET /api/requests/[id] - Get a specific request
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const timeOffRequest = await TimeOffRequestService.findById(id);

    if (!timeOffRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({ request: timeOffRequest });
  } catch (error) {
    console.error("Error fetching request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH /api/requests/[id] - Update a request (approve/deny)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the actual user from database by email (auto-creates in mock mode)
    const user = await ensureMockUser(session.user.email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { id } = await params;
    const body = await request.json();
    const { status, notes } = body;

    // Validate status if provided
    if (status && !Object.values(RequestStatus).includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${Object.values(RequestStatus).join(", ")}` },
        { status: 400 }
      );
    }

    // Get the existing request
    const existingRequest = await TimeOffRequestService.findById(id);
    if (!existingRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    // Check permissions for status changes
    if (status && (status === RequestStatus.APPROVED || status === RequestStatus.REJECTED)) {
      // Only managers/admins can approve/reject
      const isManagerOrAdmin = user.role === "MANAGER" || user.role === "ADMIN";
      if (!isManagerOrAdmin) {
        return NextResponse.json(
          { error: "Forbidden: Manager or Admin role required to approve/reject" },
          { status: 403 }
        );
      }
    }

    // Build update data
    const updateData: {
      status?: RequestStatus;
      reviewerId?: string;
      notes?: string;
    } = {};

    if (status) {
      updateData.status = status as RequestStatus;
      // Set reviewer when approving/rejecting
      if (status === RequestStatus.APPROVED || status === RequestStatus.REJECTED) {
        updateData.reviewerId = user.id;
      }
    }

    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const updatedRequest = await TimeOffRequestService.update(id, updateData);

    return NextResponse.json({ request: updatedRequest });
  } catch (error) {
    console.error("Error updating request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
