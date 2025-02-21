import ProductCard from "@/components/card/ProductCard";
import Filterbtn from "@/components/filter/Filterbtn";
import { getAllProduct } from "@/utils/actions";
import React from "react";

async function page({
  searchParams,
}: {
  searchParams: { filter: string | undefined | null };
}) {
  const categoryFilter = searchParams.filter || "";

  const allProducts = await getAllProduct(categoryFilter);

  return (
    <section>
      <h1 className="my-10 text-xl font-semibold">محصولات</h1>
      <div className="flex items-center justify-between mb-6">
        <Filterbtn />
        <p className="text-neutral-400">
          {allProducts?.length.toLocaleString("fa-IR")}
          کالا
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts?.map((product) => (
          <ProductCard product={product} edit={false} />
        ))}
      </div>
    </section>
  );
}

export default page;
