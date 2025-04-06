"use client";
import { useCartStore } from "@/store/CartStore";
import { createOrderByUser } from "@/utils/actions";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";

interface props {
  addressId: string | undefined;
  userId: string | undefined;
}

function Totalpayment({ addressId, userId }: props) {
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clearCart } = useCartStore((state) => state);
  const totalPrice = cart.reduce((acc, cur) => {
    const curTotal =
      ((cur.discountPrice as number) > 0
        ? cur.discountPrice
        : (cur.price as number)) || 0 * cur.qt;

    return acc + curTotal;
  }, 0);

  const orderData = {
    userId,
    addressId,
    totalPrice,
    orderItems: cart.map((item) => {
      return {
        productId: item.productId,
        size: item.size,
        sizeId: item.sizeId,
        color: item.color,
        colorId: item.colorId,
        quantity: item.qt,
        price: item.discountPrice ? item.discountPrice : item.price,
      };
    }),
  };

  const router = useRouter();
  const handleorder = async () => {
    try {
      setIsLoading(true);
      const res = await createOrderByUser(orderData);
      if (res.success) {
        router.push("/checkout/status");
        toast.success("سفارش شما با موفقیت ثبت شد");
        clearCart();
      } else {
        router.push("/checkout/status");
        toast.error("شکست در ثبت سفارش لطفا دوباره تلاش کنید");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="border w-full rounded-[8px] p-6 space-y-8 mt-4">
      <div className="flex items-center justify-between gap-x-12">
        <p className="text-[14px] text-neutral-700">مبلغ نهایی</p>
        <p className="text-[14px] text-primary-main">
          {totalPrice.toLocaleString("fa-IR")}تومان
        </p>
      </div>

      <button
        disabled={cart?.length == 0 || !orderData.userId}
        onClick={handleorder}
        type="submit"
        className="w-full bg-primary-main text-white py-3 rounded-[8px] disabled:bg-primary-700">
        {isLoading ? <Loader2 className="animate-spin mx-auto" /> : "پرداخت"}
      </button>
      <Toaster />
    </div>
  );
}

export default Totalpayment;
