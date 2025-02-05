"use client";
import Image from "next/image";
import { useState } from "react";

function Search({ inpage }: { inpage: boolean }) {
  const [value, setValue] = useState("");
  return (
    <div
      className={` relative ${
        inpage
          ? "w-full block lg:hidden mt-[14px]"
          : "w-[600px] hidden lg:block"
      } `}>
      <input
        className={`border border-neutral-300 focus:border-primary-400 text-neutral-600 w-full py-2 ${
          inpage ? "rounded-[5px]" : "rounded-[16px]"
        }  flex items-center justify-center pr-[34px] bg-neutral-100`}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="flex items-center  gap-x-[3px] absolute top-2 right-2">
        <Image alt="" width={24} height={24} src="/images/search-normal.svg" />
        {!value && <span className="text-body-6 text-neutral-500">جستجو</span>}
      </div>
    </div>
  );
}

export default Search;
