import CommentCard from "@/components/card/CommentCard";
import { getCommentForUser, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/auth/sign-in");
  }
  const res = await getCommentForUser(user?.id);

  const userInfo = await getUserInfo(user?.id);

  if (!res?.comments?.length) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative w-[300px] h-[300px]">
            <Image src="/images/image 27.png" fill alt="" />
          </div>
          <p>شما نظری ثبت نکردید</p>
        </div>
      </div>
    );
  }
  return (
    <div className="h-svh">
      <div>
        {res.comments.map((item) => (
          <CommentCard key={item?.id} comment={item} userId={userInfo?.id} />
        ))}
      </div>
    </div>
  );
}

export default page;
