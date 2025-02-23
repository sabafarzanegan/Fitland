"use client";
import { filterProduct } from "@/assets/helper/helper";
import { useRouter, useSearchParams } from "next/navigation";

function Filterbtn() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const filter = searchParam.get("filter") || null;
  const filterHandler = (value: string) => {
    const param = new URLSearchParams(window.location.search);
    if (value) {
      param.set("filter", value);
    } else {
      param.delete("filter");
    }
    router.push(`products/?${param.toString()}`);
  };
  return (
    <ul className="flex items-center gap-x-4 text-neutral-700">
      {filterProduct.map((item) => (
        <li
          onClick={() => filterHandler(item.value)}
          className={`cursor-pointer py-2 px-3 text-lg ${
            item.value === filter
              ? "text-primary-main  border-b-primary-main border-b-2"
              : ""
          }`}
          key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Filterbtn;
