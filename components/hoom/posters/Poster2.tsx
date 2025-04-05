import Image from "next/image";
import Link from "next/link";

function Poster2() {
  return (
    <div className="mb-8">
      <div>
        <div className="relative rounded-xl h-[300px] md:h-[500px] lg:h-[700px] hero-green mt-20  text-secondary-900">
          <div className=" absolute inset-0 flex flex-col justify-center items-start  px-8 md:px-16 lg:px-32">
            <p>برای لذت بردن از مسیر</p>
            <p className="font-bold text-lg"> دوچرخه،اسکیت و اسکوتر بگیر</p>
            <button className="bg-secondary-main mt-8 w-[166px] h-[42px] px-1   rounded-[8px]">
              <Link
                href="/products?category=اسکیت&category=اسکوتر"
                className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/images/arrow-left.svg"
                    width={24}
                    height={24}
                    alt=""
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
