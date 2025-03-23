import Commentsection from "@/components/comments/Commentsection";
import EmblaCarousel from "@/components/corousel/EmblaCarousel";
import FavoriteForm from "@/components/favorites/FavoriteForm";
import ProductAd from "@/components/product/advertize/ProductAd";
import DescriptonProduct from "@/components/product/DescriptonProduct";
import ProductFeature from "@/components/product/ProductFeature";
import ShareButton from "@/components/product/ShareButton";
import { getProductById, getUserInfo } from "@/utils/actions";
import { getProduct } from "@/utils/type";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { EmblaOptionsType } from "embla-carousel";

async function page({ params }: { params: { id: string | undefined } }) {
  const product = await getProductById(params.id as string);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user.id);
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div className="mt-[53px] container h-svh">
      <div className="flex items-start gap-x-6 flex-wrap md:flex-nowrap">
        <EmblaCarousel slides={product?.images} options={OPTIONS} />
        <div className="flex items-end justify-between w-full">
          <ProductFeature
            product={product as getProduct}
            userId={userInfo?.id}
          />
          <div className="flex items-center gap-x-4">
            <FavoriteForm productId={params.id} userId={userInfo?.id} />
            <ShareButton productId={params.id} />
          </div>
        </div>
      </div>
      <div className="border border-neutral-400 p-8 mt-8 rounded-[8px]">
        <DescriptonProduct>{product?.description as string}</DescriptonProduct>
      </div>
      {/* coommetns section */}
      <Commentsection productId={params.id} />
      <ProductAd />
    </div>
  );
}

export default page;
