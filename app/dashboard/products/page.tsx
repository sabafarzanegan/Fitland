import CartProductList from "@/components/cart/CartProductList";
import LoadingProduct from "@/components/product/LoadingProduct";
import Pagination from "@/components/product/Pagination";
import ProductList from "@/components/product/ProductList";
import TableProducts from "@/components/table/TableProducts";
import { getAllProduct } from "@/utils/actions";
import { Suspense } from "react";
async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const products = await getAllProduct();
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const categoryFilter = searchParams.filter || "";
  const brandfilter = searchParams.brand || "";

  const entries = products?.slice(start, end);
  return (
    <div>
      <h1 className="mb-4">محصولات</h1>
      <TableProducts entries={entries} />
      {/* <Suspense fallback={<LoadingProduct />}>
        <ProductList
          page={page}
          per_page={per_page}
          categoryFilter={categoryFilter}
          brandfilter={brandfilter}
        />
      </Suspense> */}
    </div>
  );
}

export default page;
