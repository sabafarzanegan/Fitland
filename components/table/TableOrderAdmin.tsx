import { orderData } from "@/utils/type";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/table/Table";
import { getUserInfoForOrder } from "@/utils/actions";

import Link from "next/link";

async function TableOrderAdmin({ order }: { order: orderData }) {
  const userInfo = await getUserInfoForOrder(order?.userId as string);

  return (
    <div>
      <Table className="">
        <TableHeader className="w-full">
          <TableRow>
            <TableHead className="px-0 text-right">نام</TableHead>
            <TableHead className="px-0 text-right">مبلغ</TableHead>
            <TableHead className="px-0 text-right">تاریخ</TableHead>
            <TableHead className="px-0 text-right">جزئیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="mb-3">
            <TableCell className="line-clamp-2 text-[12px] md:text-md">
              {userInfo?.name}
            </TableCell>
            <TableCell>
              {order?.totalPrice.toLocaleString("fa-IR")} تومان
            </TableCell>
            <TableCell>
              {
                order?.createdAt
                  ?.toLocaleString("fa-IR")
                  .toString()
                  .split(",")[0]
              }
            </TableCell>
            <TableCell>
              <Link
                href={`/dashboard/manage/${order?.id}`}
                className="p-1 bg-secondary-300 rounded-md text-white">
                مشاهده
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableOrderAdmin;
