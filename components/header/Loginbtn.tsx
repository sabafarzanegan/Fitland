"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

function Loginbtn() {
  return (
    <LoginLink>
      <button className="shadow-[0px_0px_20px_rgba(0, 0, 0, 0.852)] py-3  px-1 flex items-center justify-between rounded-[12px]">
        <div className=" font-semibold text-body-4 text-neutral-700 flex items-center gap-x-1 justify-between">
          <span>ثبت نام</span>
          <div className="w-[2px] h-[12px] bg-neutral-500"></div>
          <span>ورود</span>
        </div>
        <div className="px-2">
          <Image alt="usericon" src="/images/user.svg" width={22} height={22} />
        </div>
      </button>
    </LoginLink>
  );
}

export default Loginbtn;
