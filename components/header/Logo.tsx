import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <div className="hidden md:block">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logosvg" width={150} height={32} />
        </Link>
      </div>
      <div className="block md:hidden">
        <Image src="/images/logo.svg" alt="logosvg" width={81} height={28} />
      </div>
      <span className="mt-2 text-neutral-500 text-body-6 hidden md:block">
        فروشگاه لوازم ورزشی فیت لند
      </span>
    </div>
  );
}

export default Logo;
