import Image from "next/image";
import Link from "next/link";

function Poster2() {
  return (
    <div className="mb-8">
      <div>
        <div className="relative rounded-2xl h-[300px] md:h-[500px] lg:h-[700px] hero-green mt-20  text-secondary-900">
          <div className=" absolute inset-0 flex flex-col justify-center items-start  px-8 md:px-16 lg:px-32">
            <p>برای لذت بردن از مسیر</p>
            <p className="font-bold text-lg"> دوچرخه،اسکیت و اسکوتر بگیر</p>
            <Link href="/products">
              <button className="bg-secondary-main mt-8 flex items-center  w-[166px] h-[42px] px-1  gap-x-2 rounded-[8px]">
                <span>
                  <Image
                    src="/images/arrow-left.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </span>
                <Link
                  href="/products?category=اسکیت&category=اسکوتر"
                  className="text-neutral-100 font-bold">
                  مشاهده محصولات
                </Link>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster2;
