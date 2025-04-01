"use client";
import { useCartStore } from "@/store/CartStore";
import Image from "next/image";
import React from "react";

function BagCartMobile() {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="relative">
      <div className="relative w-6 h-6 ">
        <Image src="/images/bag-1.svg" alt="" fill />
      </div>
      <span className="absolute -top-3 -right-1 w-5 h-5 text-[14px]  flex items-center justify-center rounded-full bg-primary-main text-white">
        <span>{cart.length.toLocaleString("fa-IR")}</span>
      </span>
    </div>
  );
}

export default BagCartMobile;
