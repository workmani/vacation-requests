import { NextRequest, NextResponse } from "next/server";

const VALID_ROLES = ["EMPLOYEE", "MANAGER", "ADMIN"] as const;
type MockRole = typeof VALID_ROLES[number];

export async function GET() {
  // Only allow in mock mode
  if (process.env.USE_MOCK_AUTH !== "true") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  // Return available roles
  return NextResponse.json({
    roles: VALID_ROLES,
    enabled: true
  });
}

export async function POST(request: NextRequest) {
  // Only allow in mock mode
  if (process.env.USE_MOCK_AUTH !== "true") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  try {
    const { role } = await request.json();

    if (!VALID_ROLES.includes(role as MockRole)) {
      return NextResponse.json(
        { error: "Invalid role. Must be EMPLOYEE, MANAGER, or ADMIN" },
        { status: 400 }
      );
    }

    // Set cookie with the selected role
    const response = NextResponse.json({ success: true, role });
    response.cookies.set("mock-role", role, {
      httpOnly: false, // Allow client-side reading for UI
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
