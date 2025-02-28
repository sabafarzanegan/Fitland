"use client";
import { getProductForCart } from "@/utils/actions";
import { getProduct } from "@/utils/type";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/CartStore";
import Link from "next/link";
import Loading from "../loading/Loading";
import Image from "next/image";

interface prop {
  cartItem: {
    productId: string;
    size: string;
    color: string;
    qt: number;
    discountPrice?: number | null;
    price?: number;
  };
}

function CartProduct({ cartItem }: prop) {
  const [product, setProduct] = useState<getProduct | undefined>();
  const [loading, setIsloading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setIsloading(true);
      try {
        const res = await getProductForCart(cartItem.productId);
        setProduct(res as getProduct);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }
    };
    getProduct();
  }, [cartItem.productId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Link href={`/products/${cartItem.productId}`}>
      <div className="flex items-center justify-between border rounded-md ">
        {/* image and info */}
        <div className="flex items-center gap-x-2">
          <div className="w-[80px] h-[80px] relative">
            <Image
              src={product?.images[0].url as string}
              alt=""
              className="w-full h-full rounded-md"
              fill
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-[12px] md:text-[14px] text-secondary-main font-semibold">
              {product?.name}
            </h1>
            <div className="flex items-center justify-between gap-x-4">
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
            </div>
          </div>
        </div>
        {/* price */}

        <div className="pl-2">
          <p className="text-secondary-main place-items-end">
            {(cartItem.discountPrice || 0 > 0
              ? cartItem.discountPrice
              : cartItem.price
            )?.toLocaleString("fa-IR")}
            تومان
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CartProduct;
