"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/Table";
import { Edit2, Loader, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/utils/type";
import { deletProductById } from "@/utils/actions";
import { toast, Toaster } from "sonner";
function TableProducts({ entries }: { entries: getProduct[] | undefined }) {
  const [isLoading, setIsLoading] = useState(false);
  const deletProducthandler = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await deletProductById(id);
      if (res.isSuccess) {
        toast.success("محصول با موفقیت حدف شد");
      } else {
        toast.error("خطا دوباره تلاش کنید");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Table dir="rtl" className=" overflow-x-scroll">
        <TableHeader className="w-full">
          <TableRow>
            <TableHead className="px-0 text-right">تصویر</TableHead>
            <TableHead className="px-0 text-right">نام</TableHead>
            <TableHead className="px-0 text-right">قیمت اصلی</TableHead>
            <TableHead className="px-0 text-right">تخفیف خورده</TableHead>
            <TableHead className="px-0 text-right">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries?.map((item) => (
            <TableRow key={item.id} className="mb-3">
              <TableCell className="w-[30%] h-[30%]">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.images[0]?.url}
                    alt=""
                    width={50}
                    height={50}
                    className=""
                  />
                </Link>
              </TableCell>
              <TableCell className="text-[12px] md:text-md">
                {item.name}
              </TableCell>
              <TableCell className="text-[12px] md:text-md">
                {item.price.toLocaleString("fa-IR")} تومان
              </TableCell>
              <TableCell className="text-[12px] md:text-md">
                {item.discountPrice?.toLocaleString("fa-IR")}تومان
              </TableCell>
              <TableCell className="">
                <Link
                  href={`/dashboard/products/edit/${item.id}`}
                  className="inline-flex px-4 cursor-pointer">
                  <Edit2 className="w-4 h-4" />
                </Link>

                <button
                  disabled={isLoading}
                  onClick={() => deletProducthandler(item.id)}
                  className="inline-flex cursor-pointer">
                  {isLoading ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <Trash className="w-4 h-4" />
                  )}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Toaster />
    </>
  );
}

export default TableProducts;
