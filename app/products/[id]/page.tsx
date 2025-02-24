import EmblaCarousel from "@/components/corousel/EmblaCarousel";
import { getProductById } from "@/utils/actions";
import { EmblaOptionsType } from "embla-carousel";

async function page({ params }: { params: { id: string | undefined } }) {
  const product = await getProductById(params.id as string);
  console.log(product);
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="mt-[53px]">
      <div className="flex items-start gap-x-6">
        <EmblaCarousel slides={product?.images} options={OPTIONS} />
        <div>مشخصات</div>
      </div>
    </div>
  );
}

export default page;
