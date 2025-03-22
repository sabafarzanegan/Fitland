import Image from "next/image";
import Link from "next/link";

function Poster2() {
  return (
    <div>
      <div>
        <div className="hero-green mt-20 text-secondary-900">
          <div className="container pt-[159px] pr-[148px]">
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
                <p className=" text-neutral-100 font-bold   ">مشاهده محصولات</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster2;
