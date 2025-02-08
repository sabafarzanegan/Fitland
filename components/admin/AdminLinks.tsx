"use client";
import { AdminLink } from "@/assets/helper/helper";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminLinks() {
  const param = usePathname();

  return (
    <div className="mx-auto flex items-center justify-center">
      <ul className="px-[2px]">
        {AdminLink.map((item) => {
          return (
            <>
              <Link key={item.id} href={item.link}>
                <li
                  className={`flex items-center gap-x-2 px-[32px] ${
                    param === item.link
                      ? "text-secondary-400 border-b-secondary-400"
                      : "text-neutral-800"
                  }   w-[228px] h-[62px] border-b `}>
                  <span>{<item.icon className="w-4 h-4" />}</span>
                  <span>{item.name}</span>
                </li>
              </Link>
            </>
          );
        })}

        <LogoutLink>
          <li
            className={`flex items-center gap-x-2 px-[32px]   w-[228px] h-[62px] border-b  hover:text-cinnabar-500 hover:border-b-cinnabar-500`}>
            <Image src="/images/logout.svg" alt="" width={20} height={20} />
            <span>خروج</span>
          </li>
        </LogoutLink>
      </ul>
    </div>
  );
}

export default AdminLinks;
