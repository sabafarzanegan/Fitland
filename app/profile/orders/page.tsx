import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getOrderByUser, getUserInfo } from "@/utils/actions";
import OrderCart from "@/components/card/OrderCart";
import UserOrders from "@/components/order/UserOrders";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user.id);
  const ordersInfo = await getOrderByUser(userInfo?.id);
  console.log(ordersInfo);

  return (
    <div className="space-y-6">
      {ordersInfo?.orders.map((order) => (
        <UserOrders key={order.id} id={order.id} />
      ))}
    </div>
  );
}

export default page;
