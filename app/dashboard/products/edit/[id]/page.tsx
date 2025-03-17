import EditProductForm from "@/components/form/EditProductForm";
import { getCategories, getProductById } from "@/utils/actions";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  const categories = await getCategories();

  return (
    <div>
      <h1>صفحه تغییر محصول</h1>
      <EditProductForm product={product} categories={categories} />
    </div>
  );
}

export default page;
