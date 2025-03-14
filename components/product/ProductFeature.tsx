"use client";
import { calcDiscount } from "@/utils/lib";
import { getProduct } from "@/utils/type";
import React, { useState } from "react";
import CartBtn from "../cart/CartBtn";
import { Check } from "lucide-react";
function ProductFeature({ product }: { product: getProduct }) {
  const [selecedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const selectedProduct = {
    productId: product.id,
    size: selecedSize.value,
    sizeId: selecedSize.id,
    color: selectedColor.hex,
    colorId: selectedColor.id,
    price: product.price,
    discountPrice: product.discountPrice,
    image: product.images[0].url,
    name: product.name,
  };
  console.log(product);

  return (
    <div className="mt-[21px]">
      {/* title */}
      <div className="space-y-2">
        <h1 className="text-[28px] font-semibold">{product?.name}</h1>
        <p className="text-[14px] text-neutral-500">{product?.categoryName}</p>
      </div>
      {/* price  */}
      <div className="space-y-[20px]">
        {(product.discountPrice as number) > 0 && (
          <p className="text-secondary-main text-[24px] lg:text-[32px] font-bold">
            {product?.discountPrice?.toLocaleString("fa-IR")}تومان
          </p>
        )}

        <div className="flex items-center gap-x-[40px]">
          <p
            className={`text-secondary-main font-bold  ${
              (product.discountPrice as number) > 0
                ? "line-through text-neutral-400 font-normal text-[18px] lg:text-[24px]"
                : ""
            } `}>
            {product?.price.toLocaleString("fa-IR")}تومان
          </p>
          <div className="w-[62px] h-[36px] rounded-[8px] bg-primary-main text-white flex items-center justify-center">
            <span>
              {calcDiscount(product?.price, product?.discountPrice || 0)}%
            </span>
          </div>
        </div>
      </div>
      {/* size */}
      <div className="mt-[20px] space-y-2">
        <h2 className="text-[24px] font-semibold ">سایز</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-2">
          {product?.sizes.map((size) => (
            <div
              key={size.id}
              onClick={() => setSelectedSize(size)}
              className={`${
                selecedSize.id == size.id && "border-2 border-secondary-700"
              } w-[60px] lg:w-[80px]  rounded-2 bg-neutral-150 text-secondary-main flex items-center justify-center cursor-pointer`}>
              <span className="text-md">{size?.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* colors */}
      <div className="mt-[20px] mb-[20px] space-y-2">
        <h2 className="text-[24px] font-semibold">رنگ</h2>
        <div className="flex items-cente gap-x-4">
          {product?.colors.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedColor(cls)}
              style={{ backgroundColor: cls?.hex, cursor: "pointer" }}
              className={`
               w-6 h-6 rounded-full flex items-center justify-center  ${
                 selectedColor.id == cls.id &&
                 "border-4 border-secondary-400 w-7 h-7"
               }`}>
              {selectedColor.id == cls.id && (
                <Check className="w-4 h-4 text-primary-850 opacity-100 " />
              )}
            </div>
          ))}
        </div>
      </div>
      <CartBtn selectedProduct={selectedProduct} />
    </div>
  );
}

export default ProductFeature;
