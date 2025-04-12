import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getOrderByUser, getUserInfo } from "@/utils/actions";
import UserOrders from "@/components/order/UserOrders";
import { redirect } from "next/navigation";
import Image from "next/image";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/auth/sign-in");
  }
  const userInfo = await getUserInfo(user.id);
  const ordersInfo = await getOrderByUser(userInfo?.id);
  if (!ordersInfo?.orders.length) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative w-[300px] h-[300px]">
            <Image src="/images/image 27.png" fill alt="" />
          </div>
          <p>سفارشی برای شما ثبت نشده است</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {ordersInfo?.orders.map((order) => (
        <UserOrders key={order.id} id={order.id} />
      ))}
    </div>
  );
}

export default page;
