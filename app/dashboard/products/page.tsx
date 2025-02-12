import ProductCard from "@/components/card/ProductCard";
import { getAllProduct } from "@/utils/actions";
import React from "react";

async function page() {
  const products = await getAllProduct();

  return (
    <div>
      <h1 className="mb-4">محصولات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {products?.map((product) => (
          <ProductCard edit={true} product={product} />
        ))}
      </div>
    </div>
  );
}

export default page;
