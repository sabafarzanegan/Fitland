import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: any) {
    console.log("look at me", req.kindeAuth);
    if (!req.kindeAuth?.token) {
      console.log("❌ کاربر لاگین نیست، هدایت به صفحه لاگین...");
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  },
  {
    isReturnToCurrentPage: true,
    loginPage: "/auth/sign-in",
    publicPaths: [
      "/",
      "/public",
      "auth",
      "auth/sign-in",
      "auth/sign-up",
      "auth",
      "products",
      "checkout/cart",
    ],
    isAuthorized: ({ token }: { token: { permissions: string[] } }) => {
      return token.permissions.includes("eat:chips");
    },
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
