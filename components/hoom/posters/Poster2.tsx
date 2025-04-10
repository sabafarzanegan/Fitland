import Image from "next/image";
import Link from "next/link";

function Poster2() {
  return (
    <div className="mb-8">
      <div>
        <div className="relative  hero-green mt-20  text-secondary-900 aspect-video">
          <div className=" absolute inset-0 flex flex-col justify-center items-start  px-8 md:px-16 lg:px-32">
            <p className="text-[10px] lg:text-lg">برای لذت بردن از مسیر</p>
            <p className="font-bold text-[10px] lg:text-lg">
              {" "}
              دوچرخه،اسکیت و اسکوتر بگیر
            </p>
            <button className="bg-secondary-main mt-8 w-[130px] h-[28px]  text-[10px] lg:text-[16px] lg:w-[166px] lg:h-[42px] px-1   rounded-[8px]">
              <Link
                href="/products?category=اسکیت&category=اسکوتر"
                className="flex items-center justify-center gap-x-2 ">
                <span>
                  <Image
                    src="/images/arrow-left.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="w-3 h-3 md:w-6 md:h-6"
                  />
                </span>
                <span className="text-neutral-100 font-bold">
                  مشاهده محصولات
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster2;
