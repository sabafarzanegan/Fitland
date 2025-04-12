"use client";

import { useCartStore } from "@/store/CartStore";
import Image from "next/image";
import Link from "next/link";

function BagCart() {
  const { cart } = useCartStore((state) => state);

  return (
    <Link href="/checkout/cart">
      <div className="relative w-[48px] h-[48px] cursor-pointer bg-primary-main flex items-center justify-center rounded-[12px] ">
        <Image width={25} height={25} src="/images/bag-2.svg" alt="" />
        <div className="absolute -top-1 -left-1 w-4 h-4 bg-secondary-main text-white flex items-center justify-center text-body-7 rounded-full text-sm">
          {cart.length.toLocaleString("fa-IR")}
        </div>
      </div>
    </Link>
  );
}

export default BagCart;
