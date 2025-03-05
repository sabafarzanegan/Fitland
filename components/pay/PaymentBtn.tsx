"use client";

import { useFormStatus } from "react-dom";
import Loading from "../loading/Loading";

function PaymentBtn() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        disabled={pending}
        type="submit"
        className="w-full bg-primary-main text-white py-3 rounded-[8px]">
        {pending ? <Loading /> : "پرداخت"}
      </button>
    </div>
  );
}

export default PaymentBtn;
