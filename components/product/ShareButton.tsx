"use client";
import Image from "next/image";
import { EmailShareButton } from "react-share";

function ShareButton({ productId }: { productId: string | undefined }) {
  return (
    <div>
      <EmailShareButton url={`/https://fitland-ivory.vercel.app/${productId}`}>
        <div>
          <Image src="/images/share.svg" width={24} height={24} alt="" />
        </div>
      </EmailShareButton>
    </div>
  );
}

export default ShareButton;
