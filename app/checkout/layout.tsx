import CheckoutCrumb from "@/components/checkoutcrumb/CheckoutCrumb";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <div className="my-4">
        <CheckoutCrumb />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default layout;
