"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import SelectProvince from "../userProfile/SelectProvince";

import { saveUserAddress } from "@/utils/actions";
import { toast, Toaster } from "sonner";
import { FormAddress } from "@/utils/type";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/Input/Input";
import { formAddressSchema } from "@/utils/schema";

function AddressForm({
  id,
  addressInfo,
}: {
  id: string | undefined;
  addressInfo: FormAddress;
}) {
  const form = useForm<z.infer<typeof formAddressSchema>>({
    resolver: zodResolver(formAddressSchema),
    defaultValues: {
      address: addressInfo.address || "",
      city: addressInfo.city || "",
      number: addressInfo.number || "",
      phonenum: addressInfo.phonenum || "",
      reciving: addressInfo.reciving || "",
      state: addressInfo.state || "",
      unit: addressInfo.unit || "",
      zipcode: addressInfo.zipcode || "",
    },
  });
  async function onSubmit(values: z.infer<typeof formAddressSchema>) {
    const res = await saveUserAddress(values, id);
    if (res?.isSuccess) {
      toast.success(res.message, {
        className: "text-white bg-picton_blue-500",
      });
    } else {
      toast.error("خطا!دوباره تلاش کنید", {
        className: "text-white bg-cinnabar-500 ",
      });
    }
  }
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} action="">
          <p className="text-neutral-600 text-[18px] mb-2">نشانی شما</p>
          <textarea
            {...form.register("address")}
            name="address"
            id="address"
            className="border border-neutral-400 rounded-[16px] w-full focus:ring-1 focus:ring-neutral-400 focus:outline-none max-h-[120px] h-full pr-4 pt-4 text-[16px]"
          />

          {form.formState.errors.address && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.address.message}
            </p>
          )}
          <div>
            <p className="text-[18px] text-neutral-600 py-[11px]">
              آدرس خود را تکمیل کنید
            </p>
          </div>
          <div className="border  border-neutral-400 rounded-[16px]">
            <div className="px-[22px] py-[35px]">
              <SelectProvince />
            </div>
          </div>
          <p className="mt-6 text-neutral-600 text-md pb-4">
            به چه کسی تحویل داده شود
          </p>

          <div className="border  border-neutral-400 rounded-[16px] px-[22px] py-[35px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            <Input
              title="نام و نام خانوادگی گیرنده"
              {...form.register("reciving")}
            />
            {form.formState.errors.reciving && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.reciving.message}
              </p>
            )}
            <Input title="شماره تماس گیرنده" {...form.register("phonenum")} />
            {form.formState.errors.phonenum && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.phonenum.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <button
              disabled={form.formState.isSubmitting}
              className="w-[128px] h-[48px] bg-secondary-main rounded-[8px] text-white">
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                "ثبت"
              )}
            </button>
          </div>
        </form>
      </FormProvider>
      <Toaster />
    </div>
  );
}

export default AddressForm;
