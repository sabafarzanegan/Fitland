import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

function page() {
  return (
    <div className="space-y-4 mt-6">
      <h1 className="font-bold">ثبت نام</h1>
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}

export default page;
