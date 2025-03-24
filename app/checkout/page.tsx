import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    return redirect("/auth/sign-in");
  }
  return <div>checkout</div>;
}

export default page;
