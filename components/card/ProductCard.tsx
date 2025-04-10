"use client";
import { calcDiscount } from "@/utils/lib";
import { getProduct } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";

function ProductCard({
  product,
  edit,
}: {
  product: getProduct;
  edit: boolean;
}) {
  return (
    <>
      <Link
        href={`/products/${product?.id}  overflow-hidden `}
        dir="rtl"
        className="mx-auto w-[300px]  overflow-hidden ">
        <div className="  overflow-hidden  w-full max-h-[600px] h-full border rounded-[12px]  mx-auto ">
          {/* image product */}
          <div className=" w-full h-[280px] relative overflow-hidden aspect-square">
            <Image
              src={product?.images[0]?.url as string}
              fill
              alt=""
              loading="lazy"
              className="w-full h-full overflow-hidden rounded-t-[12px] "
            />
            {product?.discountPrice && (
              <div className="w-[72px] h-[29px] bg-primary-main absolute flex items-center justify-center rounded-bl-[16px] text-white text-body-5 ">
                {calcDiscount(product?.price, product?.discountPrice)}%
              </div>
            )}
          </div>
          {/* caption product */}
          <div className="">
            <div className=" text-secondary-900 py-3 space-y-4 px-3">
              <div className="flex items-center justify-between">
                <p className="text-body-4 text-secondary-900">
                  {product?.name}
                </p>
                {!edit && (
                  <div className="flex items-center gap-x-[5px]">
                    {/* <ShowStars productId={product.id} /> */}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-x-1">
                {(product?.discountPrice as number) > 0 && (
                  <p className="text-body-5">
                    {product?.discountPrice?.toLocaleString("fa-IR")} تومان
                  </p>
                )}

                <span
                  className={` ${
                    (product?.discountPrice as number) > 0 &&
                    "line-through text-neutral-500 text-[14px]"
                  }  `}>
                  {product?.price.toLocaleString("fa-IR")} تومان
                </span>
              </div>
              <div>
                {product?.sizes?.length > 1 ? (
                  <p className="text-body-6">
                    <span className="px-1">از سایز </span>{" "}
                    {`${product?.sizes[0]?.value}تا سایز${
                      product.sizes[product?.sizes?.length - 1].value
                    }`}
                  </p>
                ) : (
                  <p>{`سایز ${product?.sizes[0]?.value}`}</p>
                )}
              </div>
            </div>
            <div className=" w-24 h-10 flex items-center justify-center px-4  ">
              {product.colors.map((cls) => (
                <div
                  key={cls?.id}
                  style={{ backgroundColor: cls.name }}
                  className=" w-5 h-5  rounded-full "></div>
              ))}
            </div>
          </div>

          <div></div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
