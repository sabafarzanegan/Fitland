import AddressForm from "@/components/form/AddressForm";
import { getAddressInfo, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/auth/sign-in");
  }
  const userInfo = await getUserInfo(user?.id);
  const addres = await getAddressInfo(userInfo?.id);
  const addressInfo = {
    city: addres?.city,
    address: addres?.address as string,
    state: addres?.state,
    zipcode: addres?.zipcode,
    number: addres?.number,
    unit: addres?.unit,
    reciving: addres?.reciving,
    phonenum: addres?.phonenum,
  };
  return (
    <div className="py-6 flex items-start justify-between gap-x-6 flex-wrap w-full gap-y-6">
      {/* address */}
      <div className="mx-auto w-full ">
        <div className="border-b-2  py-2 my-4">
          <h1 className="text-neutral-700">آدرس ارسال</h1>
        </div>

        <AddressForm id={userInfo?.id} addressInfo={addressInfo} />
      </div>
      {/* continue */}
      <div className="w-full px-9 py-6 border rounded-[8px] flex flex-col items-center justify-center gap-y-10 mx-auto ">
        <div>
          <p className="text-neutral-700 text-[14px]">
            در انتخاب آدرس و همچنین انتخاب روز ارسال دقت فرمایید
          </p>
        </div>
        <Link href="/checkout/pay" className="w-full">
          <button
            disabled={!addressInfo}
            className="bg-primary-main text-white mx-auto w-full py-3  rounded-[8px] disabled:bg-primary-850 disabled:opacity-60">
            تکمیل فرآیند پرداخت
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
