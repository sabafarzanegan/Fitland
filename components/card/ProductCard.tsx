import { Star } from "lucide-react";
import Image from "next/image";

function ProductCard() {
  return (
    <div className=" rounded-t-[16px] overflow-hidden w-[386px] h-[430px]">
      {/* image product */}
      <div className=" w-full h-[280px] relative">
        <Image
          src="/images/product.png"
          fill
          alt=""
          className="w-full h-full"
        />
        <div className="w-[72px] h-[29px] bg-primary-main absolute flex items-center justify-center rounded-bl-[16px] text-white text-body-5">
          %20
        </div>
      </div>
      {/* caption product */}
      <div className=" text-secondary-900 py-3 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-body-4 text-secondary-900">تیشرت زنانه NCY</p>
          <div className="flex items-center gap-x-[5px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star className="w-[13px] h-[13px]" key={i} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <p className="text-body-5">160,000 تومان</p>
          <span className="text-neutral-500 line-through text-[14px]">
            200,000 تومان
          </span>
        </div>
        <div>
          <p className="text-body-6">از سایز M تا 3XL</p>
        </div>
      </div>
      <div className="relative w-24 h-10 flex items-center justify-center">
        <div className="absolute left-6 w-8 h-8 bg-black rounded-full"></div>
        <div className="absolute left-8 w-8 h-8 bg-gray-400 rounded-full opacity-80"></div>
        <div className="absolute left-10 w-8 h-8 bg-black rounded-full"></div>
      </div>
    </div>
  );
}

export default ProductCard;
