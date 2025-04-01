import ProductCard from "@/components/card/ProductCard";
import ProductList from "@/components/product/ProductList";
import { searchHandler } from "@/utils/actions";
import Image from "next/image";

async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const searchQuery = searchParams.query || "";
  console.log(searchQuery);
  const products = await searchHandler(searchQuery as string);
  console.log(products);

  if (!products?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center container">
        <div className="space-y-10 flex items-center justify-center flex-col">
          <div>
            <Image
              src="/images/No data-pana 1.png"
              width={310}
              height={186}
              alt=""
            />
          </div>
          <div>
            <p className="text-secondary-main font-semibold text-[18px] text-center">{`متاسفانه نتیجه‌ای برای جست‌وجو “${searchQuery}” یافت نشد :(`}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container w-full mt-10">
      <h1 className="font-semibold  text-secondary-main ">{`نتایج جستجوی شما برای ${searchQuery}`}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        {products?.map((item) => (
          <ProductCard product={item} edit={false} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default page;
