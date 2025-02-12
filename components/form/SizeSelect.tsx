"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/Input/Input";
import { useFormContext, useWatch } from "react-hook-form";

function SizeSelect({
  edit,
  allsize,
}: {
  edit?: boolean;
  allsize?: { id: string; value: string }[];
}) {
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState<{ id: string; value: string }[]>([]);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const addSize = () => {
    if (!size) return;
    const newSize = {
      id: crypto.randomUUID(),
      value: size,
    };
    const updatedSizes = [...sizes, newSize];
    setSizes(updatedSizes);
    setValue("sizes", updatedSizes);

    setSize("");
  };
  const watchSizes = useWatch({ name: "sizes" });
  useEffect(() => {
    if (edit && watchSizes) {
      setSizes(watchSizes);
    }
  }, [edit, watchSizes]);

  const removeSize = (id: string) => {
    const updatedsizes = sizes.filter((size) => size.id !== id);
    setSizes(updatedsizes);
    setValue("sizes", updatedsizes);
  };
  return (
    <div className="border p-4 rounded-[14px]">
      <div className="flex items-center justify-center gap-x-4">
        <Input
          {...register("sizes")}
          value={size}
          title="انتخاب سایز"
          onChange={(e) => setSize(e.target.value)}
        />

        <button
          type="button"
          onClick={addSize}
          className="px-2 py-1 text-sm bg-primary-main rounded-[8px] text-white">
          اضافه کردن
        </button>
      </div>
      {errors.sizes && (
        <p className="text-red-500 text-sm">{errors.sizes.message as string}</p>
      )}
      <div className="flex items-center flex-wrap gap-x-1">
        {sizes?.map((item) => (
          <span
            onClick={() => removeSize(item.id)}
            className="text-neutral-600 bg-neutral-200 px-2 rounded-sm cursor-pointer"
            key={item.id}>
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SizeSelect;
