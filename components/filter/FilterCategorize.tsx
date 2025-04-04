import { getCategories } from "@/utils/actions";
import FilterBtnCategoties from "./FilterBtnCategoties";

async function FilterCategorize() {
  const category = await getCategories();

  return (
    <div className="flex-col gap-y-4 font-semibold hidden md:flex mt-4">
      <div>
        <p>دسته بندی</p>
      </div>
      <div className="border w-[288px] rounded-[16px] px-4 py-3">
        <FilterBtnCategoties category={category} />
      </div>
    </div>
  );
}

export default FilterCategorize;
