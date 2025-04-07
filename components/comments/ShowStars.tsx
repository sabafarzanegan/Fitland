import { getStarByProductId } from "@/utils/actions";
import { Star } from "lucide-react";

async function ShowStars({ productId }: { productId: string | undefined }) {
  const res = await getStarByProductId(productId);
  console.log(res);
  const stars = res?.comments.map((item) => {
    return item.score;
  });

  const totalStar = stars?.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log();

  return (
    <div>
      <div className="flex gap-1 items-center">
        <div>
          <Star className="w-3 h-3 text-[#FF991F] fill-[#FF991F]" />
        </div>
        <div>
          <p>
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
