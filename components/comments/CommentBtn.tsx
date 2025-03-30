"use client";
import { deletComment } from "@/utils/actions";
import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast, Toaster } from "sonner";

function CommentBtn({
  commentId,
  userId,
}: {
  commentId: string | undefined;
  userId: string | undefined;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const deletCommentHandler = async () => {
    setIsLoading(true);
    try {
      const res = await deletComment(commentId, userId);

      if (res.issuccess) {
        toast.success("نظر شما با موفقیت حذف شد");
        router.refresh();
      } else {
        toast.error("خطا!دوباره تلاش کنید");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("مشکلی پیش آمد، لطفاً بعداً تلاش کنید");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button className="cursor-pointer" onClick={deletCommentHandler}>
        {isLoading ? (
          <Loader2 className="animate-spin transition-all duration-150" />
        ) : (
          <Trash color="red" size={18} />
        )}
      </button>
      <Toaster />
    </div>
  );
}

export default CommentBtn;
