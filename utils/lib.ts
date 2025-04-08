import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calcDiscount = (price: number, discountPrice: number) => {
  if (discountPrice == 0) {
    return;
  }
  const increaseAmount = price - discountPrice;
  const calPresentage = (increaseAmount / price) * 100;
  console.log(calPresentage);

  return Number(calPresentage.toFixed(0)).toLocaleString("fa-IR");
};
