import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
function page() {
  return (
    <div className="space-y-4 mt-6 h-svh">
      <h1 className="font-bold text-center">ورود</h1>
      <div className="flex items-center justify-center">
        <LoginLink>
          <button className="bg-secondary-main text-white w-[200px] py-2 rounded-lg">
            صفحه ورود
          </button>
        </LoginLink>
      </div>
    </div>
  );
}

export default page;
