import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { TimeOffRequestService } from "@/lib/services";
import { UserService } from "@/lib/services";

// GET /api/requests/team - Get requests from manager's team
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the actual user from database by email
    const user = await UserService.findByEmail(session.user.email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if user is manager or admin
    const isManagerOrAdmin = user.role === "MANAGER" || user.role === "ADMIN";
    if (!isManagerOrAdmin) {
      return NextResponse.json(
        { error: "Forbidden: Manager or Admin role required" },
        { status: 403 }
      );
    }

    // Get pagination params
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const status = searchParams.get("status"); // Optional filter

    // For managers, get their team's requests
    // For admins, get all requests
    let requests;
    let total;

    if (user.role === "ADMIN") {
      // Admin sees all requests
      requests = await TimeOffRequestService.findAll(page, limit);
      total = await TimeOffRequestService.count();
    } else {
      // Manager sees only their team's requests
      requests = await TimeOffRequestService.findByManager(user.id, page, limit);
      total = await TimeOffRequestService.count({ managerId: user.id });
    }

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
    console.error("Error fetching team requests:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
