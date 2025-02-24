import ProductCard from "@/components/card/ProductCard";
import Filterbtn from "@/components/filter/Filterbtn";
import FilterSidebar from "@/components/product/filterproduct/filterSidebar";
import LoadingProduct from "@/components/product/LoadingProduct";
import ProductList from "@/components/product/ProductList";
import { getAllProduct } from "@/utils/actions";
import React, { Suspense } from "react";

async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const categoryFilter = searchParams.filter || "";
  const brandfilter = searchParams.brand || "";

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "2";

  return (
    <section>
      <h1 className="my-10 text-xl font-semibold">محصولات</h1>
      <div className="flex items-center justify-between mb-6">
        <Filterbtn />
      </div>
      <div>
        <div>
          <Suspense fallback={<LoadingProduct />}>
            <ProductList
              page={page}
              per_page={per_page}
              categoryFilter={categoryFilter}
              brandfilter={brandfilter}
            />
          </Suspense>
        </div>
        {/* <FilterSidebar /> */}
      </div>
    </section>
  );
}

export default page;
