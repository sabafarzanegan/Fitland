import Filterbtn from "@/components/filter/Filterbtn";
import LoadingProduct from "@/components/product/LoadingProduct";
import ProductList from "@/components/product/ProductList";
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
  const category = searchParams.category || "";

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  return (
    <section className="container ">
      <h1 className="my-10 text-xl font-semibold">محصولات</h1>
      <div className="flex items-center justify-between mb-14">
        <Filterbtn />
      </div>
      <div className="">
        <div className="flex  justify-start gap-x-6  mx-auto">
          {/* <FilterCategorize /> */}
          <Suspense fallback={<LoadingProduct />}>
            <ProductList
              page={page}
              per_page={per_page}
              categoryFilter={categoryFilter}
              brandfilter={brandfilter}
              category={category}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default page;
