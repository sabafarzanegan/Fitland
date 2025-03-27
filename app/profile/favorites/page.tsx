import FavorteCard from "@/components/card/FavorteCard";
import ProductCard from "@/components/card/ProductCard";
import { favoriteUser, getProductById, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const res = await favoriteUser(user.id);

  if (!res?.favorites.length) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative w-[300px] h-[300px]">
            <Image src="/images/image 27.png" fill alt="" />
          </div>
          <p>شما هیچ کالایی را به موردعلاقه ها اضافه نکردید :(</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
      {res.favorites.map((item) => {
        return <FavorteCard productId={item.prodcutId} edit={false} />;
      })}
    </div>
  );
}

export default page;
