import { getComment } from "@/utils/type";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Star } from "lucide-react";
import Image from "next/image";

async function CommentItem({ item }: { item: getComment }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="border py-6 rounded-md">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-x-2 ">
          <div>
            <Image
              src={user.picture as string}
              alt=""
              className="rounded-full "
              width={50}
              height={50}
            />
          </div>
          <div>
            <span>{user.given_name}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-1 ">
          {Array.from({ length: 5 }).map((_, index) => {
            const starIndex = index + 1;
            return (
              <Star
                className={`w-4 h-4  ${
                  starIndex <= item.score
                    ? "text-[#FF991F] fill-[#FF991F]"
                    : "text-gray-300"
                }`}
              />
            );
          })}
        </div>
      </div>
      <div className="px-4">
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default CommentItem;
