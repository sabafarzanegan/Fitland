import ProfileLinks from "@/components/userProfile/ProfileLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <div className=" md:hidden flex flex-col items-center justify-center">
        {/* top side */}
        <div className="bg-gradient-to-b w-[288px] from-[#FEEEE8] to-blue-[#FFFFFF] py-[48px] rounded-[16px]">
          <div className="w-[100px] h-[100px]  mx-auto mb-2">
            <Image
              src={user?.picture as string}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-center text-[12px] text-secondary-900 font-[400] ">
            <p>{user.given_name}</p>
            <span>{user.email}</span>
          </div>
        </div>
        {/* linkItems */}
        <ProfileLinks />
      </div>
    </div>
  );
}

export default page;
