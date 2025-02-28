"use client";

import { useCartStore } from "@/store/CartStore";
import CartProduct from "./CartProduct";
import TotoalPrice from "./TotoalPrice";

function CartProductList() {
  const { cart } = useCartStore((state) => state);

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-2  ">
      <div className=" w-full ">
        {cart.map((cartItem) => (
          <CartProduct cartItem={cartItem} />
        ))}
      </div>
      <TotoalPrice />
    </div>
  );
}

export default CartProductList;
