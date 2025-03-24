// // import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// // import { NextResponse } from "next/server";

// // export default withAuth(
// //   async function middleware(req: any) {
// //     console.log("Request received:", req.url); // بررسی درخواست
// //     if (!req.kindeAuth?.token) {
// //       return NextResponse.redirect(new URL("/auth/sign-in", req.url));
// //     }
// //   },
// //   {
// //     publicPaths: ["/auth/sign-in", "/auth/sign-up", "/public", "/products"],
// //     isAuthorized: ({ token }: { token: { permissions: string[] } }) => {
// //       return token.permissions.includes("eat:chips");
// //     },
// //   }
// // );

// // export const config = {
// //   matcher: ["/checkout/:path*", "/profile/:path*"],
// // };

// import { NextResponse } from "next/server";

// export default function middleware(req: any) {
//   console.log("Middleware triggered:", req.url); // یک پیام ساده برای تست

//   return NextResponse.next(); // برای ادامه پردازش درخواست
// }
// export const config = {
//   matcher: [
//     "/checkout/:path*", // تطبیق مسیرهای داینامیک زیر `/checkout/`
//     "/profile/:path*", // تطبیق مسیرهای داینامیک زیر `/profile/`
//   ],
// };
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: any) {
    console.log("Request received:", req.url);
    console.log("User Token:", req.kindeAuth?.token);
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
    ], // مسیرهای عمومی
    // isAuthorized: ({ token }: { token: { permissions: string[] } }) => {
    //   return token.permissions.includes("eat:chips"); // چک کردن مجوزها
    // },
  }
);

export const config = {
  matcher: ["/checkout/:path*", "/profile/:path*", "/dashboard/:path"], // مسیرهای محافظت‌شده
};
