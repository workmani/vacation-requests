import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { TimeOffRequestService } from "@/lib/services";
import { TimeOffType } from "@/lib/generated/prisma";
import { ensureMockUser } from "@/lib/services/mock-user.service";

// GET /api/requests - Get current user's requests
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    console.log("[GET /api/requests] Session email:", session?.user?.email);

    if (!session?.user?.email) {
      console.log("[GET /api/requests] No session email found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the actual user from database by email (auto-creates in mock mode)
    const user = await ensureMockUser(session.user.email);
    console.log("[GET /api/requests] Found user:", user?.id, user?.email);
    if (!user) {
      console.log("[GET /api/requests] User not found for email:", session.user.email);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get pagination params
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");

    const requests = await TimeOffRequestService.findByUser(user.id, page, limit);
    const total = await TimeOffRequestService.count({ userId: user.id });
    console.log("[GET /api/requests] Found", requests.length, "requests for user", user.id);

    return NextResponse.json({
      requests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching requests:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper to check if user is manager-only (not admin) - for POC, managers can't create requests
function isManagerOnly(sessionUser: { role?: string; roles?: string[] }) {
  const checkRole = (role: string) => role.toUpperCase();

  const isManager =
    (sessionUser.role && checkRole(sessionUser.role) === "MANAGER") ||
    (sessionUser.roles?.some(r => checkRole(r) === "MANAGER"));

  const isAdmin =
    (sessionUser.role && checkRole(sessionUser.role) === "ADMIN") ||
    (sessionUser.roles?.some(r => checkRole(r) === "ADMIN"));

  return isManager && !isAdmin;
}

// POST /api/requests - Create a new request
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    console.log("[POST /api/requests] Session email:", session?.user?.email);

    if (!session?.user?.email) {
      console.log("[POST /api/requests] No session email found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // POC: Managers (who are not admins) cannot create requests
    if (session.user && isManagerOnly(session.user)) {
      console.log("[POST /api/requests] Manager tried to create request - forbidden");
      return NextResponse.json(
        { error: "Managers cannot create time off requests" },
        { status: 403 }
      );
    }

    // Get the actual user from database by email (auto-creates in mock mode)
    const user = await ensureMockUser(session.user.email);
    console.log("[POST /api/requests] Found user:", user?.id, user?.email);
    if (!user) {
      console.log("[POST /api/requests] User not found for email:", session.user.email);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json();
    console.log("[POST /api/requests] Request body:", body);
    const { type, startDate, endDate, duration, notes } = body;

    // Validate required fields
    if (!type || !startDate || !endDate || duration === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: type, startDate, endDate, duration" },
        { status: 400 }
      );
    }

    // Validate type
    if (!Object.values(TimeOffType).includes(type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${Object.values(TimeOffType).join(", ")}` },
        { status: 400 }
      );
    }

    const newRequest = await TimeOffRequestService.create({
      userId: user.id,
      type: type as TimeOffType,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      duration: Number(duration),
      notes: notes || undefined,
    });
    console.log("[POST /api/requests] Created request:", newRequest.id);

    return NextResponse.json({ request: newRequest }, { status: 201 });
  } catch (error) {
    console.error("Error creating request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
