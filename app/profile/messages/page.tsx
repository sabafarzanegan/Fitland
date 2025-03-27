import CommentCard from "@/components/card/CommentCard";
import { getCommentForUser } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const res = await getCommentForUser(user.id);
  console.log(res);
  if (!res?.comments.length) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative w-[300px] h-[300px]">
            <Image src="/images/image 27.png" fill alt="" />
          </div>
          <p>سفارشی برای شما ثبت نشده است</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        {res.comments.map((item) => (
          <CommentCard comment={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
