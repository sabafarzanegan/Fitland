// import Image from "next/image";
// import Link from "next/link";

import Image from "next/image";
import Link from "next/link";

// function Landing() {
//   return (
//     <div className="mt-[48px] flex items-start justify-between">
//       <div className=" flex items-start">
//         <div className="space-y-4 mx-auto">
//           <p className=" font-semibold text-neutral-600">
//             راحت و مطمئن خرید کنید!
//           </p>
//           <h1 className=" text-secondary-main font-bold text-[2rem]">
//             همراه تو در مسیر سلامتی
//           </h1>
//           <h1 className=" text-primary-main font-bold text-[2rem]">
//             سهم بزرگ خودتان را امروز بگیرید!
//           </h1>
//           <p className="  text-neutral-600 font-semibold">
//             بزرگترین حراج فصل فیت لند همین حالا شروع کن و محصولات با یه تخفیف
//             شگفت انگیز بخر!
//           </p>
//           <button className="bg-secondary-main flex items-center w-[166px] h-[42px] px-1  gap-x-2 rounded-[8px]">
//             <span>
//               <Image
//                 src="/images/arrow-left.svg"
//                 width={24}
//                 height={24}
//                 alt=""
//               />
//             </span>
//             <Link href="/products">
//               <p className=" text-neutral-100 font-bold  text-caption-3 ">
//                 مشاهده محصولات
//               </p>
//             </Link>
//           </button>
//         </div>

//         <div className="w-[300px] h-[300px] hidden md:block relative">
//           <Image alt="" src="/images/landing.jpg" fill className="absolute" />
//         </div>
//       </div>
//       <div className="space-y-6 hidden lg:block">
//         <div className="flex items-center gap-x-[16px] w-[277px]">
//           <div className="p-5 bg-secondary-0 rounded-[16px]">
//             <Image src="/images/shop.svg" height={40} width={40} alt="" />
//           </div>
//           <div>
//             <p className="text-secondary-400 font-bold ">+ ۳۰۰ </p>
//             <span className="text-neutral-700 font-bold">محصولات متنوع</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-x-[16px]">
//           <div className="p-5 bg-secondary-0 rounded-[16px]">
//             <Image src="/images/like.svg" height={40} width={40} alt="" />
//           </div>
//           <div>
//             <p className="text-secondary-400 font-bold ">۹۵ %</p>
//             <span className="text-neutral-700 font-bold">رضایت مشتری</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-x-[16px]">
//           <div className="p-5 bg-secondary-0 rounded-[16px]">
//             <Image src="/images/calendar.svg" height={40} width={40} alt="" />
//           </div>
//           <div>
//             <p className="text-secondary-400 font-bold ">۴روز</p>
//             <span className="text-neutral-700 font-bold">
//               از خرید تا دریافت
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing;

function Landing() {
  return (
    <div className="mt-[48px] flex flex-col items-center justify-center min-h-[60vh] container">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="space-y-4 text-center md:text-start">
          <p className="font-semibold text-neutral-600">
            راحت و مطمئن خرید کنید!
          </p>
          <h1 className="text-secondary-main font-bold text-[2rem]">
            همراه تو در مسیر سلامتی
          </h1>
          <h1 className="text-primary-main font-bold text-[2rem]">
            سهم بزرگ خودتان را امروز بگیرید!
          </h1>
          <p className="text-neutral-600 font-semibold">
            بزرگترین حراج فصل فیت لند همین حالا شروع کن و محصولات با یه تخفیف
            شگفت انگیز بخر!
          </p>
          <button className="bg-secondary-main flex items-center mx-auto lg:mx-0 w-[166px] h-[42px] px-1 gap-x-2 rounded-[8px]">
            <span>
              <Image
                src="/images/arrow-left.svg"
                width={24}
                height={24}
                alt=""
              />
            </span>
            <Link href="/products" className="">
              <p className="text-neutral-100 font-bold text-caption-3">
                مشاهده محصولات
              </p>
            </Link>
          </button>
        </div>

        <div className="w-[300px] h-[300px] hidden md:block relative">
          <Image alt="" src="/images/landing.jpg" fill className="absolute" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
