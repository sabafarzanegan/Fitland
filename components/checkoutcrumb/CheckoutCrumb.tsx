"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb/breadcrumb";
import Image from "next/image";

import { usePathname } from "next/navigation";

function CheckoutCrumb() {
  const pathname = usePathname();

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className="flex items-center">
          <BreadcrumbItem
            className={`flex flex-col gap-y-1 ${
              pathname === "/checkout/cart" &&
              "border-b-2 border-b-secondary-300 pb-1"
            } 
          `}>
            <div className="">
              <Image
                width={24}
                height={24}
                src="/images/shopping-cart2.svg"
                alt=""
              />
            </div>
            <p className={`text-[12px] text-secondary-400`}>سبد خرید</p>
          </BreadcrumbItem>
          <div className={`w-[73px] h-[1px] bg-secondary-main mb-4`}></div>
          <BreadcrumbItem
            className={`flex flex-col gap-y-1 ${
              pathname === "/checkout/location" &&
              "border-b-2 border-b-secondary-300 pb-1"
            }`}>
            <div>
              <Image
                width={24}
                height={24}
                src="/images/location-add.svg"
                alt=""
              />
            </div>
            <p className={`text-[12px] text-secondary-400`}>ثبت نشانی</p>
          </BreadcrumbItem>
          <div className={`w-[73px] h-[1px] bg-secondary-main mb-4`}></div>
          <BreadcrumbItem
            className={`flex flex-col gap-y-1 ${
              pathname === "/checkout/pay" &&
              "border-b-2 border-b-secondary-300 pb-1"
            }`}>
            <div>
              <Image
                width={24}
                height={24}
                src="/images/empty-wallet.svg"
                alt=""
              />
            </div>
            <p className="text-[12px] text-secondary-400 ">پرداخت</p>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default CheckoutCrumb;
