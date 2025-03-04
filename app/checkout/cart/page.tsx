import CartProductList from "@/components/cart/CartProductList";
import TotoalPrice from "@/components/cart/TotoalPrice";

import React from "react";

function page() {
  return (
    <div className="mx-auto py-4">
      <CartProductList />
      <TotoalPrice />
    </div>
  );
}

export default page;
