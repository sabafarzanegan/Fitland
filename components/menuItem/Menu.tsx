import { menueItem, menuFilter } from "@/assets/helper/helper";
import Image from "next/image";

function Menu() {
  return (
    <div className="mt-[38px] hidden md:block">
      <div className="flex items-center justify-between gap-x-4">
        <ul className="flex items-center gap-x-6 lg:gap-x-10 text-[0.65rem] lg:text-[0.82rem] xl:text-[1rem] font-bold text-neutral-800">
          {menueItem.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <ul className="flex items-center gap-x-6 lg:gap-x-10 text-[0.65rem] lg:text-[0.82rem] xl:text-[1rem] font-bold text-neutral-800">
          {menuFilter.map((item) => (
            <div key={item.id} className="flex items-center gap-x-[4px]">
              <Image src={item.icon} width={18} height={18} alt="" />
              <li>{item.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
