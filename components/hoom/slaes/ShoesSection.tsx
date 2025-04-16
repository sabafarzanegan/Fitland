import { getAllProduct } from "@/utils/actions";
import ShoesSlider from "./ShoesSlider";

async function ShoesSection() {
  const products = await getAllProduct();
  return (
    <div>
      <div className="my-20 w-full">
        <h1 className="text-secondary-700 text-center font-bold text-[22px] lg:text-[32px] flex items-center justify-center mb-10 py-2">
          جدید ترین کفش های ورزشی
        </h1>
        <ShoesSlider slides={products} />
      </div>
    </div>
  );
}

export default ShoesSection;
