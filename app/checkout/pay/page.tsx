import CartProductList from "@/components/cart/CartProductList";
import Totalpayment from "@/components/pay/Totalpayment";
import { getAddressInfo, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user?.id);
  const addres = await getAddressInfo(userInfo?.id);

  return (
    <div className="flex items-start justify-between flex-wrap">
      {/* info */}
      <div>
        <div className="py-4 border-b-2">
          <h1 className="text-neutral-700">خلاصه محصولات</h1>
        </div>
        <div>
          <CartProductList />
        </div>
        <div className="py-4 border-b-2">
          <h1 className="text-neutral-700">آدرس شما</h1>
        </div>
        <div className="border rounded-[8px] py-10 px-5 mt-6">
          <p>{addres?.address}</p>
          <span>{addres?.state}</span>-<span>{addres?.city}</span>
          <p>{addres?.phonenum}</p>
          <p>{addres?.reciving}</p>
        </div>
      </div>
      {/* link */}
      <div>
        <Totalpayment addressId={addres?.id} userId={userInfo?.id} />
      </div>
    </div>
  );
}

export default page;
