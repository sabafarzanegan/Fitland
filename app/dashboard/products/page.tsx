import ProductCard from "@/components/card/ProductCard";
import Modal from "@/components/modal/Modal";
import Pagination from "@/components/product/Pagination";
import { getAllProduct } from "@/utils/actions";
import React from "react";

async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const products = await getAllProduct();
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "2";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products?.slice(start, end);
  return (
    <div>
      <h1 className="mb-4">محصولات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {entries?.map((product) => (
          <ProductCard edit={true} product={product} />
        ))}
      </div>
      <Pagination
        hasNextPage={end < (products?.length || 0)}
        hasPrevPage={start > 0}
      />
    </div>
  );
}

export default page;
