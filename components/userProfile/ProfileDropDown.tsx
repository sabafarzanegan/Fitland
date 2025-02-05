"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProfileDropDown() {
  const [show, setIsshow] = useState(false);
  return (
    <div className="relative">
      {/* toggle section */}
      <div
        onClick={() => setIsshow((prev) => !prev)}
        className="flex items-center justify-center gap-x-1 shadow-[0px_0px_20px_rgba(0,0,0,0.08)] w-[60px] h-[46px] rounded-[12px] px-2 cursor-pointer">
        <div>
          <Image alt="usericon" src="/images/user.svg" width={20} height={20} />
        </div>
        <div className="hidden md:block">
          {show ? (
            <ChevronUp className="text-primary-main w-4 h-4" />
          ) : (
            <ChevronDown className="text-primary-main w-4 h-4" />
          )}
        </div>
      </div>
      {/* content  */}
      {show && (
        <div
          className="absolute transition-all duration-300 top-14 -right-12 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.08)] w-40 py-3 rounded-md  px-4
     ">
          <div className="flex flex-col items-center gap-y-3">
            {/* dashboard link */}
            <div className="bg-secondary-main  w-full px-2 py-1 rounded-sm text-white ">
              <Link href="/dashboard">حساب کاربری</Link>
            </div>
            {/* logOutlink */}
            <div className="bg-cinnabar-500 hover:bg-cinnabar-800 w-full px-2 py-1 rounded-sm text-white ">
              <LogoutLink>خروج</LogoutLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
