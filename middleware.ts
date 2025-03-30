
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: any) {
    if (!req.kindeAuth?.token) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }

    return NextResponse.next();
  },
  {
    publicPaths: [
      "/auth/sign-in",
      "/auth/sign-up",
      "/public",
      "/products",
      "checkout/cart",
    ],
  }
);

export const config = {
  matcher: ["/checkout/:path*", "/profile/:path*", "/dashboard/:path"], // مسیرهای محافظت‌شده
};
