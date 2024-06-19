import { NextResponse } from "next/server";

const middleware = (request) => {
  return NextResponse.next();
};

export const config = {
  matcher: "/news/:path",
};

export { middleware };
