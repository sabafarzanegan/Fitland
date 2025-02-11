"use client";
import React from "react";
import { Input } from "../ui/Input/Input";
import { categoryItems } from "@/assets/helper/helper";
import ColorSelect from "./ColorSelect";

import SizeSelect from "./SizeSelect";
import ImageUploader from "./ImageUoloader";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { formproductSchema } from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct } from "@/utils/actions";
import { Loader2 } from "lucide-react";

import { toast, Toaster } from "sonner";

function ProductForm() {
  const form = useForm<z.infer<typeof formproductSchema>>({
    resolver: zodResolver(formproductSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      images: [],
      sizes: [],
      colors: [],
      price: "",
      discountPrice: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formproductSchema>) => {
    console.log(values);

    const res = await createProduct(values);

    if (res.isSuccess) {
      toast.success("محصول با موفقیت  ساخته شد");
      form.reset();
    } else {
      toast.error("خطا!دوباره تلاش کنید");
    }
  };
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input {...form.register("name")} title="نام محصول" />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.name.message as string}
                </p>
              )}
            </div>
            <div>
              <div className="relative w-full">
                <label
                  htmlFor="province"
                  className={
                    "absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1"
                  }>
                  دسته بندی
                </label>
                <select
                  {...form.register("category")}
                  className="w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-400">
                  <option>انتخاب کنید</option>
                  {categoryItems.map((item) => (
                    <>
                      <option key={item.id} value={item.value}>
                        {item.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              {form.formState.errors.category && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.category.message as string}
                </p>
              )}
            </div>
            <div>
              <Input {...form.register("price")} title="قیمت اصلی" />
              {form.formState.errors.price && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.price.message as string}
                </p>
              )}
            </div>
            <div>
              <Input
                {...form.register("discountPrice")}
                title="قیمت تخفیف خورده"
              />
              {form.formState.errors.discountPrice && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.discountPrice.message as string}
                </p>
              )}
            </div>
          </div>
          {/* choose colors */}
          <div className="mt-4">
            <ColorSelect />
          </div>
          <div className="mt-4">
            <SizeSelect />
          </div>
          <div className="mt-4">
            <ImageUploader />
          </div>
          <div className="mt-4 w-full">
            <textarea
              {...form.register("description")}
              className="border border-neutral-400 rounded-[16px] w-full focus:ring-1 focus:ring-neutral-400 focus:outline-none  h-full pr-4 pt-4 text-[16px]"
            />
            {form.formState.errors.description && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.description.message as string}
              </p>
            )}
          </div>
          <button
            className="mt-2 w-[128px] h-[35px] bg-secondary-main rounded-[8px] text-white "
            type="submit"
            disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              "ساختن"
            )}
          </button>
        </form>
      </FormProvider>
      <Toaster />
    </div>
  );
}

export default ProductForm;
