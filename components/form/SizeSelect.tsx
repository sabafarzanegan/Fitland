"use client";
import { useState } from "react";
import { Input } from "../ui/Input/Input";

function SizeSelect() {
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState<{ id: string; value: string }[]>([]);

  const addSize = () => {
    if (!size) return;
    const newSize = {
      id: crypto.randomUUID(),
      value: size,
    };
    setSizes((prevsize) => [...prevsize, newSize]);
    setSize("");
  };
  return (
    <div className="border p-4 rounded-[14px]">
      <div className="flex items-center justify-center gap-x-4">
        <Input
          value={size}
          title="انتخاب سایز"
          onChange={(e) => setSize(e.target.value)}
        />
        <button
          type="button"
          onClick={addSize}
          className="w-[128px] h-[30px] bg-primary-main rounded-[8px] text-white">
          اضافه کردن
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-x-1">
        {sizes?.map((item) => (
          <span
            onClick={() => setSizes(sizes.filter((siz) => siz.id !== item.id))}
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
