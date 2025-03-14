"use client";
import { changeOrderStatus } from "@/utils/actions";
import { cn } from "@/utils/lib";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

function SelectStatus({
  orderId,
  orderStatus,
}: {
  orderId: string | undefined;
  orderStatus: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELED" | undefined;
}) {
  const [status, setStatus] = useState<
    "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELED" | undefined
  >(orderStatus);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await changeOrderStatus(orderId as string, status);
      if (res?.success) {
        toast.success("تغییر انجام شد");
      } else {
        toast.error("خطا دوباره تلاش کنید");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="relative w-full">
          <label
            htmlFor="province"
            className={cn(
              "absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1"
            )}>
            وضعیت
          </label>
          <select
            onChange={(e) =>
              setStatus(
                e.target.value as
                  | "PENDING"
                  | "SHIPPED"
                  | "DELIVERED"
                  | "CANCELED"
                  | undefined
              )
            }
            defaultValue={status}
            className="w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-400">
            <option value="PENDING">در حال بررسی</option>
            <option value="SHIPPED">ارسال</option>
            <option value="DELIVERED">تحویل داده شده</option>
            <option value="CANCELED">لغو شده</option>
          </select>
        </div>

        <button
          className="mt-4 px-4 py-1 bg-primary-main text-white rounded-md"
          type="submit">
          تغییر
        </button>
      </form>
      <Toaster />
    </>
  );
}

export default SelectStatus;
