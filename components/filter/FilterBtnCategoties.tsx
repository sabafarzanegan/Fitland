"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function FilterBtnCategoties({
  category,
}: {
  category: { id: string; name: string }[] | undefined;
}) {
  const [filter, setFilter] = useState<string>("");
  const router = useRouter();
  const searchParam = useSearchParams();
  console.log(searchParam.getAll("category"));

  const categoryHandler = (value: string) => {
    const param = new URLSearchParams(window.location.search);

    const currentCategories = param.getAll("category");

    if (currentCategories.includes(value)) {
      const newCategories = currentCategories.filter((cat) => cat !== value);
      param.delete("category");
      newCategories.forEach((cat) => param.append("category", cat));
    } else {
      param.append("category", value);
    }

    router.push(`products/?${param.toString()}`);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {category?.map((item) => {
          const filtercategory = searchParam
            .getAll("category")
            .find((cat) => cat === item.name);

          return (
            <button
              onClick={() => categoryHandler(item.name)}
              key={item.id}
              className={` border border-secondary-300 bg-secondary-150 text-white  px-3 py-1 text-[12px] rounded-[4px] ${
                filter === item.name ? "bg-secondary-main" : ""
              }`}>
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBtnCategoties;
