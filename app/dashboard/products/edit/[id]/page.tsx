import EditProductForm from "@/components/form/EditProductForm";
import { getProductById } from "@/utils/actions";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  console.log(product);

  return (
    <div>
      <h1>صفحه تغییر محصول</h1>
      <EditProductForm product={product} />
    </div>
  );
}

export default page;
