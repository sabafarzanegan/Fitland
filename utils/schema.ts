import { z } from "zod";

export const formAddressSchema = z.object({
  address: z
    .string()
    .min(2, "آدرس باید حداقل ۲ کاراکتر باشد")
    .max(100, "آدرس نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد"),
  city: z.string().min(1, "لطفاً یک شهر انتخاب کنید"),
  state: z.string().min(1, "لطفاً یک استان انتخاب کنید"),
  zipcode: z.string().min(5, "کد پستی باید حداقل ۵ رقم باشد"),
  number: z.string().min(1, "شماره ساختمان را وارد کنید"),
  unit: z.string().min(1, "شماره واحد را وارد کنید"),
  reciving: z.string().min(2, "نام گیرنده باید حداقل ۲ کاراکتر باشد"),
  phonenum: z.string().min(10, "شماره تلفن باید حداقل ۱۰ رقم باشد"),
});

export const formproductSchema = z.object({
  name: z.string().min(1, "نام محصول را وارد کنید"),
  category: z.string().min(1, "دسته بندی را انتخاب کنید"),
  description: z.string().min(2, "حداقل باید دو کلمه باشد"),
  categories: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional(),
  images: z
    .array(
      z.object({
        url: z.string(),
      })
    )
    .min(1, "حداقل یک تصویر انتخاب کنید"),
  sizes: z
    .array(
      z.object({
        value: z.string(),
        id: z.string(),
      })
    )
    .min(1, "حداقل یک سایز وارد کنید"),

  colors: z
    .array(
      z.object({
        name: z.string(),
        hex: z.string(),
      })
    )
    .min(1, "حداقل یک رنگ را انتخاب کنید"),
  price: z.string().min(1, "مقدار مثبت را وارد کنید"),
  discountPrice: z.string().min(1, "مقدار مثبت وارد کنید"),
});
