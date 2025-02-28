"use client";
import { useCartStore } from "@/store/CartStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type props = {
  selectedProduct: {
    productId: string;
    size: string;
    color: string;
    price?: number;
    discountPrice?: number | null;
  };
};

function CartBtn({ selectedProduct }: props) {
  const [qt, setQt] = useState(1);
  const { addToCart, cart, removeFromCart } = useCartStore((state) => state);
  const isInCart = cart.find(
    (cartItem) =>
      cartItem.productId === selectedProduct.productId &&
      cartItem.size === selectedProduct.size &&
      cartItem.color === selectedProduct.color
  );

  const cartItem = {
    productId: selectedProduct.productId,
    size: selectedProduct.size,
    color: selectedProduct.color,
    price: selectedProduct.price,
    discountPrice: selectedProduct.discountPrice,
    qt: 1,
  };
  return (
    <div className="">
      {isInCart ? (
        <div>
          <div className="border-2 border-primary-main flex items-center justify-between gap-x-3  px-6 h-[50px] rounded-[8px] text-primary-main  text-[20px]">
            <span
              className="cursor-pointer font-semibold text-lg"
              onClick={() => addToCart(cartItem)}>
              +
            </span>
            <p>{isInCart.qt}</p>
            <span
              className="cursor-pointer font-semibold text-lg "
              onClick={() => removeFromCart(cartItem)}>
              -
            </span>
          </div>

          <p className="text-xs text-neutral-600 mt-2">
            <Link href="/checkout/cart">درسبدخریدشما</Link>
          </p>
        </div>
      ) : (
        <button
          onClick={() => addToCart(cartItem)}
          className=" bg-primary-main rounded-[8px] text-white flex items-center justify-center gap-x-2 h-[50px]  px-6 ">
          <span>
            <Image
              src="/images/shopping-cart.svg"
              width={24}
              height={24}
              className="w-4 h-4"
              alt=""
            />
          </span>
          <span className="text-sm lg:text-md">سبد خرید</span>
        </button>
      )}
    </div>
  );
}

export default CartBtn;
