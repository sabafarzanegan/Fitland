"use client";
import { useCartStore } from "@/store/CartStore";
import Link from "next/link";
import Image from "next/image";

interface prop {
  cartItem: {
    productId: string;
    size: string;
    sizeId: string;
    color: string;
    colorId: string;
    qt: number;
    discountPrice?: number | null;
    price?: number;
    name: string;
    image: string;
  };
}

function CartProduct({ cartItem }: prop) {
  const deletItem = useCartStore((state) => state.deletItem);

  return (
    <div className="flex-1 rounded-md max-w-md border  mx-auto w-full  ">
      {/* image and info */}

      <div className="flex items-center gap-x-2">
        <Link href={`/products/${cartItem.productId}`}>
          <div className="w-[80px] h-[80px] relative">
            <Image
              src={cartItem.image as string}
              alt=""
              className="w-full h-full"
              fill
            />
          </div>
        </Link>
        <div className="space-y-4 flex-1 px-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[12px] md:text-[14px] text-secondary-main font-semibold">
              {cartItem?.name}
            </h1>
            <div className="cursor-pointer" onClick={() => deletItem(cartItem)}>
              <div className="relative  w-[20px] h-[20px]">
                <Image src="/images/close-square.svg" alt="" fill />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-4 w-full">
            <div
              style={{ backgroundColor: cartItem.color }}
              className="w-4 h-4 rounded-full"></div>
            <div className="text-secondary-main text-[12px] flex items-center gap-x-1">
              <p>سایز</p>
              <p>{cartItem.size}</p>
            </div>
            <div className="text-secondary-main text-[12px] flex items-center gap-x-1">
              <p>عدد</p>
              <p>{cartItem.qt}</p>
            </div>
            <div className="pl-2">
              <p className="text-secondary-main place-items-end">
                {((cartItem.discountPrice as number) > 0
                  ? cartItem.discountPrice
                  : cartItem.price
                )?.toLocaleString("fa-IR")}
                تومان
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* price */}
    </div>
  );
}

export default CartProduct;
