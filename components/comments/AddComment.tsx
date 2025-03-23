"use client";
import { commentSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/Input/Input";
import { TextArea } from "../ui/Input/TextArea";
import { useState } from "react";
import { Loader2, Star } from "lucide-react";
import { addComment } from "@/utils/actions";
import { toast, Toaster } from "sonner";

interface props {
  userInformation: {
    id: string | undefined;
    email: string | undefined;
    name: string | undefined | null;
  };
  productId: string | undefined;
}

function AddComment({ userInformation, productId }: props) {
  const [rating, setRating] = useState(0);

  const totalStars = 5;
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      userId: userInformation.id,
      content: "",
      productId: productId,
    },
  });
  async function onSubmit(values: z.infer<typeof commentSchema>) {
    console.log(values);
    try {
      const res = await addComment({ values, rating });
      if (res?.success) {
        toast.success("نظر شما با موفقیت ثبت شد");
      } else {
        toast.error("خطا!دوباره تلاش کنید");
      }
    } catch (error) {}
  }
  return (
    <div className="mb-14 w-[392px] flex-1">
      <h1 className="border-b text-[18px] font-semibold py-[10px]">
        نظرت رو برامون بنویس
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <TextArea
          title="نظر شما"
          {...form.register("content")}
          className="h-[147px] w-full"
        />
        {form.formState.errors.content && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.content.message}
          </p>
        )}
        <div className="flex items-center gap-x-[18px] justify-between">
          <div className="flex gap-1">
            {[...Array(totalStars)].map((_, index) => {
              const starIndex = index + 1;

              return (
                <Star
                  key={index}
                  className={`w-5 h-5  cursor-pointer ${
                    starIndex <= rating
                      ? "text-[#FF991F] fill-[#FF991F]"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(starIndex)}
                />
              );
            })}
          </div>

          <button
            type="submit"
            className="text-primary-main border-2 border-primary-main py-3 px-10 rounded-[8px] font-semibold">
            {form.formState.isSubmitting ? (
              <Loader2
                className="mx-auto w-4 h-4
              "
              />
            ) : (
              "ثبت نظر و امتیاز"
            )}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default AddComment;
