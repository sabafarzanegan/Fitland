"use client";

import { useCartStore } from "@/store/CartStore";
import CartProduct from "./CartProduct";
import TotoalPrice from "./TotoalPrice";
import Image from "next/image";

function CartProductList() {
  const { cart } = useCartStore((state) => state);
  if (!cart.length) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative w-[300px] h-[300px]">
            <Image src="/images/image 27.png" fill alt="" />
          </div>
          <p>سبد خرید شما خالی است</p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-4 w-full ">
      <div className=" w-full flex items-center justify-between flex-wrap mb-3 ">
        {cart.map((cartItem) => (
          <CartProduct key={cartItem.productId} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
}

export default CartProductList;
