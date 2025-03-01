import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
function page() {
  return (
    <div className="space-y-4 mt-6">
      <h1 className="font-bold">ورود</h1>
      <LoginLink>Sign in</LoginLink>
    </div>
  );
}

export default page;
