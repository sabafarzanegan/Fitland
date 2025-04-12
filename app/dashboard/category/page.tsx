import SubmitBtn from "@/components/button/SubmitBtn";
import CategoryItem from "@/components/category/CategoryItem";
import { Input } from "@/components/ui/Input/Input";
import { addCategory, getCategories } from "@/utils/actions";
import React from "react";

async function page() {
  const categories = await getCategories();

  return (
    <div>
      <form action={addCategory} className="space-y-2">
        <div className="space-y-4">
          <label htmlFor="category">اضافه کردن دسته بندی</label>
          <Input id="category" name="category" />
        </div>
        <SubmitBtn title="اضافه کردن" />
      </form>
      {/* render category */}
      <CategoryItem categories={categories} />
    </div>
  );
}

export default page;
