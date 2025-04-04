import Image from "next/image";
import Link from "next/link";
import React from "react";

function Poster1() {
  return (
    <div className="relative rounded-2xl mt-20 h-[300px] md:h-[500px] lg:h-[700px] bg-[url('/images/hero-pink.png')] bg-cover bg-center">
      <div className="absolute inset-0 flex flex-col justify-center items-start text-secondary-900 px-8 md:px-16 lg:px-32">
        <p>برای حال خوب</p>
        <p className="font-bold text-lg">لوازم ایروبیک و تناسب اندام بگیر</p>
        <Link href="/products">
          <button className="bg-secondary-main mt-8 flex items-center w-[166px] h-[42px] px-1 gap-x-2 rounded-[8px]">
            <span>
              <Image
                src="/images/arrow-left.svg"
                width={24}
                height={24}
                alt=""
              />
            </span>
            <Link
              href="/products?category=fitness&category=ایروبیک"
              className="text-neutral-100 font-bold text-caption-3">
              مشاهده محصولات
            </Link>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Poster1;
