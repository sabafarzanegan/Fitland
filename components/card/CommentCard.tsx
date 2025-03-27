import { getProductById } from "@/utils/actions";
import { getComment } from "@/utils/type";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function CommentCard({ comment }: { comment: getComment }) {
  const product = await getProductById(comment?.productId as string);
  const totalStars = 5;
  return (
    <div className="border rounded-[16px] w-full p-6">
      <div
        className="flex items-start gap-x-2 justify-between w-full
       ">
        <div>
          <Link href={`/products/${comment.productId}`}>
            <Image
              src={product?.images[0]?.url as string}
              alt=""
              width={160}
              height={160}
            />
          </Link>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">{product?.name}</p>
          <p>{comment?.content}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(totalStars)].map((_, index) => {
            const starIndex = index + 1;

            return (
              <Star
                key={index}
                className={`w-4 h-4  cursor-pointer ${
                  starIndex <= comment.score
                    ? "text-[#FF991F] fill-[#FF991F]"
                    : "text-gray-300"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
