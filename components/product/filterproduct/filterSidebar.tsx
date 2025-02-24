import PriceFilter from "./PriceFilter";

function FilterSidebar() {
  return (
    <div className="border border-neutral-300 rounded-[16px] w-[288px] p-[18px] ">
      <h3 className="mb-[18px]">فیلترها</h3>
      <PriceFilter />
    </div>
  );
}

export default FilterSidebar;
