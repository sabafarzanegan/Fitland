import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="relative w-[314px] h-[154px]">
          <Image src="/images/Group.png" fill alt="" />
        </div>
        <p className="text-secondary-main text-[24px]">
          متاسفانه صفحه مورد نظر پیدا نشد :(
        </p>
        <Link href="/">
          <button className="px-6 py-2 bg-secondary-400 text-white flex items-center  gap-x-2 rounded-[8px]">
            <div>
              <Image src="/images/home-2.svg" alt="" width={24} height={24} />
            </div>
            <p>برگشت به صفحه اصلی</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
