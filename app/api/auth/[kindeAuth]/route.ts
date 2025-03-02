import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();

// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// import { cookies } from "next/headers";

// export const GET = async (req: Request, res: string) => {
//   cookies(); // ensures Next.js properly stores cookies
//   return handleAuth(req, res); // provide both req and res
// };
