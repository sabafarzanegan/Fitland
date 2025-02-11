"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

function ColorSelect() {
  const [colors, setColors] = useState<
    { name: string; hex: string; id: string }[]
  >([]);
  const [color, setColor] = useState("#000000");
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const addColors = () => {
    if (!color) return;

    const newColor = {
      id: crypto.randomUUID(),
      name: color,
      hex: color,
    };
    const updatedColor = [...colors, newColor];
    setColors(updatedColor);
    setValue("colors", updatedColor);
  };

  return (
    <div className="border p-4 rounded-[14px]">
      <div className="flex items-center justify-center gap-x-2">
        <input
          {...register("colors")}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 border-none rounded-full cursor-pointer p-1 bg-transparent"
        />

        <button
          onClick={addColors}
          type="button"
          className="px-2 py-1 text-sm bg-secondary-main rounded-[8px] text-white">
          اضافه کردن
        </button>
      </div>
      {errors.colors && (
        <p className="text-red-500 text-sm">
          {errors.colors.message as string}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-2">
        {colors.map((item, index) => (
          <span
            onClick={() =>
              setColors(colors.filter((cls) => cls.id !== item.id))
            }
            key={index}
            className="w-5 h-5 rounded-full border cursor-pointer"
            style={{ backgroundColor: item.hex }}></span>
        ))}
      </div>
    </div>
  );
}

export default ColorSelect;
