import SubmitBtn from "@/components/button/SubmitBtn";
import { Input } from "@/components/ui/Input/Input";
import { getUserInfo, updateUserData } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/auth/sign-in");
  }
  const userInfo = await getUserInfo(user?.id);

  return (
    <div className="border rounded-[16px] border-neutral-300 p-6 ">
      <form
        action={updateUserData}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          className="hidden"
          name="id"
          defaultValue={userInfo?.id}
        />

        <Input
          name="name"
          title="نام"
          defaultValue={userInfo?.name as string}
        />
        <Input
          name="phoneNumber"
          defaultValue={userInfo?.phoneNumber as string}
          title="شماره تماس"
        />
        <Input
          name="email"
          defaultValue={userInfo?.email}
          title="ایمیل"
          type="email"
        />
        <SubmitBtn title="ثبت" />
      </form>
    </div>
  );
}

export default page;
