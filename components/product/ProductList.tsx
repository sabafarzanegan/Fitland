import ProductCard from "../card/ProductCard";
import { getAllProduct } from "@/utils/actions";
import Pagination from "./Pagination";
import { getProduct } from "@/utils/type";

async function ProductList({
  categoryFilter,
  page,
  per_page,
  brandfilter,
}: {
  categoryFilter: string | string[];
  page: string | string[];
  per_page: string | string[];
  brandfilter: string | string[];
}) {
  const allProducts = await getAllProduct(
    categoryFilter as string,
    brandfilter
  );

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const entries = allProducts?.slice(start, end);

  return (
    <>
      <p className="text-neutral-400 mb-4 text-lg">
        {allProducts?.length.toLocaleString("fa-IR")}
        <span className="px-2">کالا</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 w-full">
        {entries?.map((product) => (
          <ProductCard product={product as getProduct} edit={false} />
        ))}
      </div>
      <div>
        <Pagination
          hasNextPage={end < (allProducts?.length || 0)}
          hasPrevPage={start > 0}
        />
      </div>
    </>
  );
}

export default ProductList;
