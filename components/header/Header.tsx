import Image from "next/image";
import BagCart from "./BagCart";
import Loginbtn from "./Loginbtn";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "../menuItem/Menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ProfileDropDown from "../userProfile/ProfileDropDown";
import MobileNav from "./MobileNav";
import Link from "next/link";

async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <div className="flex items-center justify-between gap-x-10 mt-10 container ">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <Logo />
        <div className="flex items-center justify-between gap-x-2  md:hidden ">
          <Link href="/profile">
            <div className="relative w-6 h-6 ">
              <Image src="/images/user-2.svg" alt="" fill />
            </div>
          </Link>
          <Link href="/checkout/cart">
            <div className="relative w-6 h-6 ">
              <Image src="/images/bag-1.svg" alt="" fill />
            </div>
          </Link>
        </div>
        <Search inpage={false} />
        <div className=" items-center justify-center gap-x-[14px] hidden md:flex">
          {/* <FavoriteBtn /> */}
          {user ? <ProfileDropDown /> : <Loginbtn />}
          <BagCart />
        </div>
      </div>
      <Search inpage={true} />
      <Menu />
    </>
  );
}

export default Header;
