import ProductForm from "@/components/form/ProductForm";
import { getCategories } from "@/utils/actions";
import React from "react";

async function page() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <div>
      <h1>اضافه کردن محصول</h1>
      <ProductForm categories={categories} />
    </div>
  );
}

export default page;
