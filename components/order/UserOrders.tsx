import { findOrder } from "@/utils/actions";
import OrderCart from "../card/OrderCart";

interface props {
  id: string;
}
async function UserOrders({ id }: { id: string }) {
  const orders = await findOrder(id);
  console.log(orders);

  return (
    <div>
      <div className="border rounded-[8px] ">
        <div className="py-6 bg-[#EFF7F6]">
          <div className="px-6 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <p className="text-neutral-600 ">مبلغ:</p>
              <span>{orders?.totalPrice.toLocaleString("fa-IR")}تومان</span>
            </div>
            <div className="flex items-center gap-x-2">
              <p>وضعیت:</p>
              {orders?.status === "PENDING" && (
                <span className="px-2 py-1 rounded-lg bg-fern-500 text-white">
                  در حال بررسی
                </span>
              )}
              {orders?.status === "CANCELED" && (
                <span className="px-2 py-1 rounded-lg bg-cinnabar-500-500 text-white">
                  لغو شده
                </span>
              )}
              {orders?.status === "DELIVERED" && (
                <span className="px-2 py-1 rounded-lg bg-picton_blue-500 text-white">
                  تحویل داده شده
                </span>
              )}
            </div>
            <div>
              <p>
                {
                  orders?.createdAt
                    .toLocaleString("fa-IR")
                    .toString()
                    .split(",")[0]
                }
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center  gap-x-2">
            {orders?.orderItems.map((item) => (
              <OrderCart item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
