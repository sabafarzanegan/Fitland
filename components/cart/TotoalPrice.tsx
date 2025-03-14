"use client";

import { useCartStore } from "@/store/CartStore";
import Link from "next/link";

function TotoalPrice() {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce((acc, cur) => {
    const curTotal =
      ((cur.discountPrice as number) > 0
        ? cur.discountPrice
        : (cur.price as number)) || 0 * cur.qt;

    return acc + curTotal;
  }, 0);

  const totalPriceWithoutDiscount = cart.reduce((acc, cur) => {
    const price = (cur.price as number) * cur.qt;
    return acc + price;
  }, 0);

  const benefitPrice = totalPriceWithoutDiscount - totalPrice;
  const deliveriPrice = 50000;
  return (
    <div className=" border  border-neutral-300 px-6 py-4 rounded-[8px] mx-auto ">
      <div className="space-y-4 mb-4">
        {/* total price */}
        <div className="text-neutral-700 flex items-center justify-between ">
          <p className="text-[14px] ">قیمت کالاها</p>
          <p>{totalPrice.toLocaleString("fa-IR")}تومان</p>
        </div>
        {/* benefits */}
        <div className="text-primary-main flex items-center justify-between ">
          <p className="text-[14px] ">سودشماازخرید</p>
          <p>{benefitPrice.toLocaleString("fa-IR")}تومان</p>
        </div>
        {/* delivery price */}
        <div className="text-neutral-700 flex items-center justify-between ">
          <p className="text-[14px] ">هزینه ارسال</p>
          <p>{deliveriPrice.toLocaleString("fa-IR")}تومان</p>
        </div>
      </div>
      <div className="border-t-2 border-neutral-400">
        <div className="text-neutral-700 flex items-center justify-between py-4">
          <p className="text-[14px] ">مبلغ قابل پرداخت</p>
          <p>
            {(totalPrice + deliveriPrice).toLocaleString("fa-IR")}
            تومان
          </p>
        </div>
      </div>
      <Link href="/checkout/location">
        <button className="w-full mx-auto bg-primary-main text-white h-[48px] rounded-[8px]">
          تکمیل فرآیند پرداخت
        </button>
      </Link>
    </div>
  );
}

export default TotoalPrice;
