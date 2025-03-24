import CheckoutCrumb from "@/components/checkoutcrumb/CheckoutCrumb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function layout({ children }: { children: ReactNode }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    return redirect("/auth/sign-in");
  }
  return (
    <div className="container">
      <div className="my-4">
        <CheckoutCrumb />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default layout;
