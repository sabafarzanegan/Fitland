"use client";

import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import { menueItem } from "@/assets/helper/helper";
import Link from "next/link";
function MobileNav() {
  const [shownav, setShowNav] = useState(false);
  return (
    <>
      <div onClick={() => setShowNav((prev) => !prev)}>
        {shownav ? (
          <Plus className="w-8 h-8 text-secondary-main rotate-45" />
        ) : (
          <Menu className="w-8 h-8 text-secondary-main" />
        )}
      </div>
      <div
        className={`w-full h-svh absolute top-[125px] backdrop-blur-2xl z-10  transition-all duration-300 ${
          shownav ? "right-0" : "-right-full"
        }`}>
        <ul className="flex flex-col gap-y-4 py-4 px-6">
          <Link onClick={() => setShowNav((prev) => !prev)} href="/products">
            <li>محصولات</li>
          </Link>
          {menueItem.map((item) => (
            <Link
              onClick={() => setShowNav((prev) => !prev)}
              key={item.id}
              href={`/products/?brand=${item.value}`}>
              <li className="text-lg" key={item.id}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
