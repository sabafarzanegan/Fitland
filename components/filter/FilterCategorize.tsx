import { getCategories } from "@/utils/actions";

async function FilterCategorize() {
  const category = await getCategories();

  return (
    <div className="flex-col gap-y-4 font-semibold hidden md:flex">
      <div>
        <p>دسته بندی</p>
      </div>
      <div className="border w-[288px] rounded-[16px] px-4 py-3">
        <div className="grid grid-cols-2 gap-4">
          {category?.map((item) => (
            <button className=" bg-neutral-200  px-3 py-1 text-[12px] rounded-[4px]">
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterCategorize;
