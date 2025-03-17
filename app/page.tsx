import Landing from "@/components/landing/Landing";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="h-screen">
      <div className="container">
        <Landing />
      </div>
      <div className="hero-pink mt-20 text-secondary-900">
        <div className="container pt-[159px] pr-[148px]">
          <p>برای حال خوب</p>
          <p className="font-bold text-lg"> لوازم ایروبیک و تناسب اندام بگیر</p>
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
              <p className=" text-neutral-100 font-bold  text-caption-3 ">
                مشاهده محصولات
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
