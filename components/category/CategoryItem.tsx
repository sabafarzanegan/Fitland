"use client";

import { deletCategory } from "@/utils/actions";
import { Plus } from "lucide-react";

function CategoryItem({
  categories,
}: {
  categories: { id: string; name: string }[] | undefined;
}) {
  console.log(categories);

  return (
    <div className="flex items-center flex-wrap gap-y-2 gap-x-4 mt-4">
      {categories?.map((item) => (
        <div className="px-6 py-2 flex items-center justify-between gap-x-4 bg-secondary-300 text-gray-50 rounded-lg">
          <div
            onClick={() => {
              deletCategory(item.id);
            }}>
            <Plus className="w-5 h-5 rotate-45 cursor-pointer" />
          </div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default CategoryItem;
