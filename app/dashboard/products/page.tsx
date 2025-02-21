import ProductCard from "@/components/card/ProductCard";
import Modal from "@/components/modal/Modal";
import { getAllProduct } from "@/utils/actions";
import React from "react";

async function page() {
  const products = await getAllProduct();

  return (
    <div>
      <h1 className="mb-4">محصولات</h1>
      <div className="flex items-center justify-between flex-wrap gap-2">
        {products?.map((product) => (
          <ProductCard edit={true} product={product} />
        ))}
      </div>
    </div>
  );
}

export default page;
