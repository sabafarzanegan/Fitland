import Pagination from "@/components/product/Pagination";
import TableProducts from "@/components/table/TableProducts";
import { getAllProduct } from "@/utils/actions";
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

  const entries = products?.slice(start, end);
  return (
    <div>
      <h1 className="mb-4">محصولات</h1>
      <TableProducts entries={entries} />
      <Pagination
        hasNextPage={end < (products?.length || 0)}
        hasPrevPage={start > 0}
      />
    </div>
  );
}

export default page;
