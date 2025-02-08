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
