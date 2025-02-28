import EmblaCarousel from "@/components/corousel/EmblaCarousel";
import DescriptonProduct from "@/components/product/DescriptonProduct";
import ProductFeature from "@/components/product/ProductFeature";
import { getProductById } from "@/utils/actions";
import { getProduct } from "@/utils/type";
import { EmblaOptionsType } from "embla-carousel";

async function page({ params }: { params: { id: string | undefined } }) {
  const product = await getProductById(params.id as string);
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div className="mt-[53px]">
      <div className="flex items-start gap-x-6 flex-wrap md:flex-nowrap">
        <EmblaCarousel slides={product?.images} options={OPTIONS} />
        <div>
          <ProductFeature product={product as getProduct} />
        </div>
      </div>
      <div className="border border-neutral-400 p-8 mt-8 rounded-[8px]">
        <DescriptonProduct>{product?.description as string}</DescriptonProduct>
      </div>
    </div>
  );
}

export default page;
