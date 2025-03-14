import { orderData } from "@/utils/type";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/table/Table";
import { getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function TableOrderAdmin({ order }: { order: orderData }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user.id);
  console.log(userInfo);
  console.log(order.createdAt?.toLocaleString("fa-IR").toString().split(","));

  return (
    <div>
      <Table>
        <TableHeader className="w-full">
          <TableRow>
            <TableHead className="px-0 text-right">سفارش دهنده</TableHead>
            <TableHead className="px-0 text-right">مبلغ</TableHead>
            <TableHead className="px-0 text-right">تاریخ سفارش</TableHead>
            <TableHead className="px-0 text-right">جزئیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="mb-3">
            <TableCell className="line-clamp-2 text-[12px] md:text-md">
              {userInfo?.name}
            </TableCell>
            <TableCell>
              {order.totalPrice.toLocaleString("fa-IR")} تومان
            </TableCell>
            <TableCell>
              {
                order.createdAt
                  ?.toLocaleString("fa-IR")
                  .toString()
                  .split(",")[0]
              }
            </TableCell>
            <TableCell>
              <Link href={`/dashboard/manage/${order.id}`}>مشاهده</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableOrderAdmin;
