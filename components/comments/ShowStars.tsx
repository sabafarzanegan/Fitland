import { getStarByProductId } from "@/utils/actions";
import { Star } from "lucide-react";

async function ShowStars({ productId }: { productId: string | undefined }) {
  const res = await getStarByProductId(productId);

  const stars = res?.comments.map((item) => {
    return item.score;
  });

  const totalStar = stars?.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return (
    <div>
      <div className="flex gap-1 items-center">
        <div>
          <Star className="w-4 h-4 text-[#FF991F] fill-[#FF991F]" />
        </div>
        <div>
          <p className="text-lg">
            {((totalStar || 0) / (stars?.length as number) || 1).toLocaleString(
              "fa-IR"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowStars;
