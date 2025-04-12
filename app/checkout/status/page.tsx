import { getOrder, getUserInfo } from "@/utils/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user?.id);
  const res = await getOrder(userInfo?.id);

  return (
    <div
      className={`${
        res?.id ? "bg-[#EFF7F6]" : "bg-cinnabar-200 rounded-[8px]"
      }  flex flex-wrap-reverse items-center justify-between px-[54px] py-[61px] `}>
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1
          className={`text-[28px] md:text-[32px] ${
            res?.id ? "text-fern-800" : "text-cinnabar-500"
          }   font-bold py-8`}>
          {res?.id
            ? "سفارش شما با موفقیت انجام شد 🥳"
            : "پرداخت شما انجام نشد!"}
        </h1>
        <div
          className={`text-[20px] ${
            res?.id ? "text-fern-800" : "text-cinnabar-800"
          }  flex flex-col items-center justify-center gap-y-4`}>
          <p>{`${userInfo?.name} ${
            res?.id
              ? "عزیز سفارش شما با موفقیت ثبت شد"
              : " عزیز این پیام به منزله تایید نشدن خرید شماست در صورت کسر هزینه از حسب شما، مبلغ پرداختی تا ۷۲ ساعت آینده به حساب شما برخواهدگشت."
          } عزیز سفارش شما باموفقیت انجام شد`}</p>
        </div>
        <div className="mt-4 flex items-center justify-between w-full gap-2 flex-wrap ">
          <button
            className="p-2 bg-secondary-main text-white rounded-[8px] w-full
      ">
            <Link href="/">صفحه اصلی</Link>
          </button>
          <button className="p-2 border border-secondary-main text-secondary-400 rounded-[8px] w-full">
            <Link href="/profile/orders">پیگیری</Link>
          </button>
        </div>
      </div>
      <div className="mx-auto">
        <Image
          src={res?.id ? "/images/success2.png" : "/images/unsuccess.png"}
          alt=""
          width={273}
          height={273}
        />
      </div>
    </div>
  );
}

export default page;
