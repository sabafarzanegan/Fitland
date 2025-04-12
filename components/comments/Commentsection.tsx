import React from "react";
import AddComment from "./AddComment";
import { getCommentForProduct, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import CommnetList from "./CommnetList";

async function Commentsection({
  productId,
}: {
  productId: string | undefined;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user?.id);

  const userInformation = {
    id: userInfo?.id,
    email: userInfo?.email,
    name: userInfo?.name,
  };

  const comments = await getCommentForProduct(productId);

  return (
    <div className="mt-8">
      {user && (
        <div className="flex items-center gap-x-4 ">
          <div>
            <Image
              src={user?.picture as string}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p>{userInfo?.name}</p>
        </div>
      )}

      <div className="flex items-start justify-between  flex-wrap gap-x-6">
        {user && (
          <AddComment userInformation={userInformation} productId={productId} />
        )}
        <CommnetList comments={comments?.comments} />
      </div>
    </div>
  );
}

export default Commentsection;
