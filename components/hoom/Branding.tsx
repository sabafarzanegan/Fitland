import Image from "next/image";
import Link from "next/link";
import React from "react";
import BrandCart from "../card/BrandCart";

function Branding() {
  return (
    <div className="relative">
      <div className="container mt-20 flex items-end justify-center flex-wrap gap-y-6  gap-x-6 z-10 ">
        <BrandCart
          img="/images/brand1.jpg"
          link="/products?brand=nike"
          brand="nike"
        />
        <BrandCart
          img="/images/brand2.jpg"
          link="/products?brand=nike"
          brand="nike"
        />
        <div className="w-[319px] space-y-[10px] z-30 ">
          <p className="text-secondary-main text-[24px] font-bold">
            جدید ترین محصولات
          </p>
          <p className="text-neutral-600 font-semibold">
            جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب
            منزل تحویل بگیرید
          </p>
          <Link href="/products">
            <button className="bg-primary-main mt-8 flex items-center justify-center  w-full h-[42px] px-1  gap-x-2 rounded-[8px]">
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
      <div className="absolute left-0 -bottom-32">
        <img src="/images/Vector1.png" alt="" className="-z-30" />
      </div>
    </div>
  );
}

export default Branding;
