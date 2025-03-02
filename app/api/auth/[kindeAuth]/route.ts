// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

<<<<<<< HEAD
export const GET = handleAuth();

// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// import { cookies } from "next/headers";

// export const GET = async (req: Request, res: string) => {
//   cookies(); // ensures Next.js properly stores cookies
//   return handleAuth(req, res); // provide both req and res
// };
=======
// export const GET = handleAuth();

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { cookies } from "next/headers";

export const GET = async (req: Request, res: string) => {
  cookies(); // ensures Next.js properly stores cookies
  return handleAuth(req, res); // provide both req and res
};
>>>>>>> f351da003900852aad7454298112e27c49fafa63
