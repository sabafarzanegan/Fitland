import AddressForm from "@/components/form/AddressForm";
import { getAddressInfo, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const { id } = await getUser();
  const userInfo = await getUserInfo(id);
  const addres = await getAddressInfo(userInfo?.id);
  console.log(addres);
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
    <div>
      <h1 className="text-[20px]">جزئیات آدرس شما</h1>
      <AddressForm id={userInfo?.id} addressInfo={addressInfo} />
    </div>
  );
}

export default page;
