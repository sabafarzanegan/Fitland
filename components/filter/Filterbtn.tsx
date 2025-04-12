"use client";
import { filterProduct } from "@/assets/helper/helper";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Filterbtn() {
  const [isShowFilter, setIsShowFilter] = useState(false);

  const router = useRouter();
  const searchParam = useSearchParams();
  const filter = searchParam.get("filter") || null;
  const filterHandler = (value: string) => {
    const param = new URLSearchParams(window.location.search);
    if (value) {
      param.set("filter", value);
    } else {
      param.delete("filter");
    }
    router.push(`products/?${param.toString()}`);
  };
  return (
    <div>
      <div className="block md:hidden z-50">
        <button
          onClick={() => setIsShowFilter((prev) => !prev)}
          className="flex items-center gap-x-[2px] text-[15px] ">
          <Image width={10} height={10} src="/images/sort.svg" alt="" />
          <span>مرتب سازی بر اساس</span>
        </button>
      </div>

      <div
        className={`z-30 w-full bg-gray-100 transition-all duration-500 mt-4 rounded-md ${
          isShowFilter ? "translate-x-0 " : "translate-x-[2000px]"
        } `}>
        <ul className="items-center gap-x-4 text-neutral-700 flex ">
          {filterProduct.map((item) => (
            <li
              onClick={() => filterHandler(item.value)}
              className={`cursor-pointer py-2 px-3 text-md ${
                item.value === filter
                  ? "text-primary-main  border-b-primary-main border-b-2"
                  : ""
              }`}
              key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <ul className="items-center gap-x-4 text-neutral-700 hidden md:flex">
        {filterProduct.map((item) => (
          <li
            onClick={() => filterHandler(item.value)}
            className={`cursor-pointer py-2 px-3 text-lg ${
              item.value === filter
                ? "text-primary-main  border-b-primary-main border-b-2"
                : ""
            }`}
            key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filterbtn;
