import Image from "next/image";
import React from "react";

function SocialMediaLinks() {
  return (
    <div className="space-y-4 mt-5 mx-auto">
      <p className="text-[14px] font-semibold">
        برای دریافت تخفیف های بیشتر ما را دنبال کنید!
      </p>
      <div className="flex items-center justify-between flex-wrap-reverse md:flex-nowrap gap-x-8">
        <div>
          <Image src="/images/youtube.svg" alt="" width={26} height={26} />
        </div>
        <div>
          <Image src="/images/whats.svg" alt="" width={26} height={26} />
        </div>
        <div>
          <Image src="/images/telegram.svg" alt="" width={26} height={26} />
        </div>
        <div>
          <Image src="/images/insta.svg" alt="" width={26} height={26} />
        </div>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
