import Image from "next/image";
import Link from "next/link";
import React from "react";

function BrandCart({
  img,
  brand,
  link,
}: {
  img: string;
  brand: string;
  link: string;
}) {
  return (
    <Link href={link} className="">
      <div className="w-[392px] h-[462px] relative z-40">
        <div className=" w-full h-full relative rounded-2xl overflow-hidden">
          <Image src={img} fill alt="" />
        </div>
        <div className="w-full rounded-2xl bg-secondary-main text-[18px] flex  items-center px-4 right-0 py-16 bottom-0 text-white card-clip absolute">
          <div className="mt-16">
            <p>{`جدید ترین تخفیفات فصل برند ${brand} `}</p>
            <p>
              <span className="text-primary-main">٪۵۰</span> تخفیف روی تمام
              محصولات
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BrandCart;
