"use client";
import { useCartStore } from "@/store/CartStore";

function Totalpayment() {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce((acc, cur) => {
    const curTotal = (cur.discountPrice ?? (cur.price as number)) * cur.qt;
    return acc + curTotal;
  }, 0);
  return (
    <div className="border w-full rounded-[8px] p-6 space-y-8 mt-4">
      <div className="flex items-center justify-between gap-x-12">
        <p className="text-[14px] text-neutral-700">مبلغ نهایی</p>
        <p className="text-[14px] text-primary-main">
          {totalPrice.toLocaleString("fa-IR")}تومان
        </p>
      </div>
      <button className="w-full bg-primary-main text-white py-3 rounded-[8px]">
        برداخت
      </button>
    </div>
  );
}

export default Totalpayment;
