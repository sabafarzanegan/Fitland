import Image from "next/image";
import Link from "next/link";
import React from "react";

function Poster1() {
  return (
    <div className="relative  mt-20  bg-[url('/images/hero-pink.png')] bg-cover bg-center aspect-video">
      <div className="absolute inset-0 flex flex-col justify-center items-start text-secondary-900 px-8 md:px-16 lg:px-32">
        <p className="text-[10px] lg:text-lg">برای حال خوب</p>
        <p className="font-bold text-[10px] lg:text-lg">
          لوازم ایروبیک و تناسب اندام بگیر
        </p>
        <button className="bg-secondary-main mt-8  w-[130px] h-[28px]  text-[10px] lg:text-[16px] lg:w-[166px] lg:h-[42px] px-1  rounded-[8px]">
          <Link
            href="/products?category=fitness&category=ایروبیک"
            className="flex items-center gap-x-2">
            <span>
              <Image
                src="/images/arrow-left.svg"
                width={24}
                height={24}
                alt=""
                className="w-3 h-3 md:w-6 md:h-6"
              />
            </span>
            <span className="text-neutral-100 font-bold text-caption-3">
              مشاهده محصولات
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Poster1;
