import React from "react";
import EmbellaSlider from "../hoomcorousel/EmbellaSlider";
import { getAllProduct } from "@/utils/actions";

async function SalesSection() {
  const products = await getAllProduct();
  return (
    <div className="mt-20 w-full">
      <h1 className="text-secondary-700 font-bold text-[32px] flex items-center justify-center mb-10 py-2">
        تخفیفات ویژه
      </h1>
      <EmbellaSlider slides={products} />
    </div>
  );
}

export default SalesSection;
