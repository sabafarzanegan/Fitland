import OrderCart from "@/components/card/OrderCart";
import SelectStatus from "@/components/order/SelectStatus";
import { getAddressById, getOrderById } from "@/utils/actions";

import React from "react";

async function page({ params }: { params: { id: string } }) {
  const order = await getOrderById(params?.id);

  const address = await getAddressById(order?.addressId as string);

  return (
    <div>
      <div
        className="flex items-center
       justify-between flex-wrap gap-y-4 border-b py-3">
        {order?.orderItems.map((item) => (
          <OrderCart key={item?.id} item={item} />
        ))}
      </div>
      <div className="mt-10 space-y-4 border-b py-3">
        <p>استان:{address?.state}</p>
        <p>شهر:{address?.city}</p>
        <p>آدرس:{address?.address}</p>
        <p>کد پستی:{address?.zipcode}</p>
        <p>شماره تماس:{address?.phonenum}</p>
      </div>
      <div className="py-3 mt-6">
        <SelectStatus orderId={order?.id} orderStatus={order?.status} />
      </div>
    </div>
  );
}

export default page;
