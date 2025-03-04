"use client";
import { calcDiscount } from "@/utils/lib";
import { getProduct } from "@/utils/type";
import { Edit, Loader, Star, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { deletProductById } from "@/utils/actions";
import { toast, Toaster } from "sonner";
import { useState } from "react";

function ProductCard({
  product,
  edit,
}: {
  product: getProduct;
  edit: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const deletProducthandler = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await deletProductById(id);
      if (res.isSuccess) {
        toast.success("محصول با موفقیت حدف شد");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Link href={`/products/${product.id}`}>
        <div className=" rounded-[16px]  overflow-hidden max-w-sm max-h-[600px] h-full w-full border mx-auto ">
          {/* image product */}
          <div className=" w-full h-[280px] relative">
            <Image
              src={product.images[0].url}
              fill
              alt=""
              className="w-full h-full overflow-hidden rounded-t-[16px]"
            />
            {product?.discountPrice && (
              <div className="w-[72px] h-[29px] bg-primary-main absolute flex items-center justify-center rounded-bl-[16px] text-white text-body-5 ">
                {calcDiscount(product.price, product.discountPrice || 0)}%
              </div>
            )}
          </div>
          {/* caption product */}
          <div className=" text-secondary-900 py-3 space-y-4 px-3">
            <div className="flex items-center justify-between">
              <p className="text-body-4 text-secondary-900">{product.name}</p>
              {!edit && (
                <div className="flex items-center gap-x-[5px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star className="w-[13px] h-[13px]" key={i} />
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-x-1">
              <p className="text-body-5">
                {product.discountPrice?.toLocaleString("fa-IR")} تومان
              </p>
              <span className="text-neutral-500 line-through text-[14px]">
                {product.price.toLocaleString("fa-IR")} تومان
              </span>
            </div>
            <div>
              <p className="text-body-6">
                <span className="px-1">از سایز </span>{" "}
                {`${product.sizes[0].value}تا سایز${
                  product.sizes[product.sizes.length - 1].value
                }`}
              </p>
            </div>
          </div>
          <div className=" w-24 h-10 flex items-center justify-center">
            {product.colors.map((cls) => (
              <div
                key={cls.id}
                style={{ backgroundColor: cls.name }}
                className=" w-5 h-5  rounded-full"></div>
            ))}
          </div>
          <div>
            {edit && (
              <div className="flex items-center px-3 py-2 justify-between">
                <Link href={`/dashboard/products/edit/${product.id}`}>
                  <button className="p-2 bg-white transition-all duration-100 hover:bg-secondary-300 hover:text-white rounded-sm">
                    <Edit className="w-5 h-5" />
                  </button>
                </Link>

                <button
                  disabled={isLoading}
                  onClick={() => deletProducthandler(product.id)}
                  className="p-2 bg-white transition-all duration-100 hover:bg-cinnabar-500 hover:text-white rounded-sm">
                  {isLoading ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <Trash className="w-5 h-5" />
                  )}
                </button>
              </div>
            )}
          </div>
          <Toaster />
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
