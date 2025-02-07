"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitBtn({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <div className="w-full">
      <button
        disabled={pending}
        className="bg-primary-main text-center text-white rounded-[8px] w-full p-2">
        {pending ? <Loader2 className="animate-spin mx-auto" /> : title}
      </button>
    </div>
  );
}

export default SubmitBtn;
