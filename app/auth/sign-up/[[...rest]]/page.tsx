import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

function page() {
  return (
    <div className="space-y-4 mt-6 h-svh">
      <h1 className="font-bold text-center">ثبت نام</h1>
      <div className="flex items-center justify-center">
        <RegisterLink>
          <button className="bg-primary-main text-white w-[200px] py-2 rounded-lg">
            صفحه ثبت نام
          </button>
        </RegisterLink>
      </div>
    </div>
  );
}

export default page;
