import { getUserforComment } from "@/utils/actions";
import { getComment } from "@/utils/type";
import { Star } from "lucide-react";
import Image from "next/image";

async function CommentItem({ item }: { item: getComment }) {
  const user = await getUserforComment(item.userId);

  return (
    <div className="border py-6 rounded-md flex-1 w-full">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-x-2 ">
          <div>
            <Image
              src={user?.imageUrl as string}
              alt=""
              className="rounded-full "
              width={50}
              height={50}
            />
          </div>
          <div>
            <span>{user?.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-1 ">
          {Array.from({ length: 5 }).map((_, index) => {
            const starIndex = index + 1;
            return (
              <Star
                key={index}
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
