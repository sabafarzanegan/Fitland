import React from "react";
import { Input } from "../ui/Input/Input";
import { categoryItems } from "@/assets/helper/helper";
import ColorSelect from "./ColorSelect";
import { Select } from "../ui/select/Select";
import SizeSelect from "./SizeSelect";
import ImageUploader from "./ImageUoloader";

function ProductForm() {
  return (
    <div>
      <form action="" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input title="نام محصول" />
          <Select data={categoryItems} title="دسته بندی" />
          <Input title="قیمت اصلی" />
          <Input title="قیمت تخفیف خورده" />
        </div>
        {/* choose colors */}
        <div className="mt-4">
          <ColorSelect />
        </div>
        <div className="mt-4">
          <SizeSelect />
        </div>
        <div className="mt-4">
          <ImageUploader />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
