import ProductAd from "@/components/product/advertize/ProductAd";
import { getProductById, getUserInfo } from "@/utils/actions";
import { getProduct } from "@/utils/type";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { EmblaOptionsType } from "embla-carousel";
import dynamic from "next/dynamic";

const EmblaCarousel = dynamic(
  () => import("@/components/corousel/EmblaCarousel"),
  { ssr: false }
);
const Commentsection = dynamic(
  () => import("@/components/comments/Commentsection"),
  { ssr: false }
);
const ProductFeature = dynamic(
  () => import("@/components/product/ProductFeature"),
  { ssr: false }
);
const DescriptonProduct = dynamic(
  () => import("@/components/product/DescriptonProduct"),
  { ssr: false }
);
const FavoriteForm = dynamic(
  () => import("@/components/favorites/FavoriteForm"),
  { ssr: false }
);
const ShareButton = dynamic(() => import("@/components/product/ShareButton"), {
  ssr: false,
});
const ShowStars = dynamic(() => import("@/components/comments/ShowStars"));
async function page({ params }: { params: { id: string | undefined } }) {
  const product = await getProductById(params.id as string);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user?.id);
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div className="mt-[53px] container">
      <div className="flex items-start gap-x-6 flex-wrap md:flex-nowrap">
        <EmblaCarousel slides={product?.images} options={OPTIONS} />
        <div className="flex items-end justify-between w-full">
          <ProductFeature
            product={product as getProduct}
            userId={userInfo?.id}
          />

          <div className="flex items-center gap-x-4">
            {user && (
              <FavoriteForm productId={params?.id} userId={userInfo?.id} />
            )}
            <ShareButton productId={params?.id} />
            <ShowStars productId={product?.id} />
          </div>
        </div>
      </div>

      <div className="border border-neutral-400 p-8 mt-8 rounded-[8px]">
        <DescriptonProduct>{product?.description as string}</DescriptonProduct>
      </div>
      {/* coommetns section */}
      <Commentsection productId={params?.id} />
      <ProductAd />
    </div>
  );
}

export default page;
