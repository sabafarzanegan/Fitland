"use client";
import React, { useState } from "react";
import { Input } from "../ui/Input/Input";
import { categoryItems } from "@/assets/helper/helper";
import ColorSelect from "./ColorSelect";
import SizeSelect from "./SizeSelect";
import ImageUploader from "./ImageUoloader";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { formproductSchema } from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProductById } from "@/utils/actions";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { getProduct } from "@/utils/type";

function EditProductForm({
  product,
  categories,
}: {
  product: getProduct | undefined | null;
  categories: { id: string; name: string }[] | undefined;
}) {
  const [selectedCategories, setSelectedCategories] = useState<
    { id: string; name: string }[] | undefined
  >(product?.categories || []);
  console.log(selectedCategories);

  const form = useForm<z.infer<typeof formproductSchema>>({
    resolver: zodResolver(formproductSchema),
    defaultValues: {
      name: product?.name || "",
      category: product?.categoryName || "",
      description: product?.description || "",
      images: product?.images || [],
      sizes: product?.sizes || [],
      colors: product?.colors || [],
      price: product?.price.toString(),
      discountPrice: product?.discountPrice?.toString(),
      categories: product?.categories,
    },
  });
  const onSubmit = async (values: z.infer<typeof formproductSchema>) => {
    console.log(values);
    const res = await updateProductById(
      product?.id as string,
      values,
      selectedCategories
    );

    if (res.isSuccess) {
      toast.success("محصول با موفقیت تغییر کرد");
    } else {
      toast.error("خطا!دوباره تلاش کنید");
    }
  };
  const handleCategoryChange = (category: { id: string; name: string }) => {
    setSelectedCategories((prev) => {
      if (prev?.some((item) => item.id === category.id)) {
        return prev.filter((item) => item.id !== category.id);
      } else {
        return [...(prev || []), category];
      }
    });
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
            <ColorSelect edit={true} />
          </div>
          <div className="mt-4">
            <SizeSelect edit={true} allsize={product?.sizes} />
          </div>
          <div className="mt-4">
            <ImageUploader />
          </div>
          <div className="mt-4 ">
            <h3>دسته بندی ها</h3>
            <div className="flex items-center justify-between flex-wrap py-2">
              {categories?.map((item) => {
                console.log(
                  product?.categories?.some((cate) => cate.id == item.id)
                );

                return (
                  <>
                    <fieldset className="">
                      <div className="flex items-center gap-x-2">
                        <input
                          checked={selectedCategories?.some(
                            (category) => category.id === item.id
                          )}
                          onChange={() => handleCategoryChange(item)}
                          className="accent-primary-main"
                          type="checkbox"
                          id={item.name}
                          name={item.name}
                        />
                        <label htmlFor={item.name}>{item.name}</label>
                      </div>
                    </fieldset>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mt-4 w-full">
            <textarea
              {...form.register("description")}
              className="border border-neutral-400 rounded-[16px] w-full min-h-3.5 focus:ring-1 focus:ring-neutral-400 focus:outline-none  h-full pr-4 pt-4 text-[16px]"
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
              "اصلاح"
            )}
          </button>
        </form>
      </FormProvider>
      <Toaster />
    </div>
  );
}

export default EditProductForm;
