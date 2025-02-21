import Image from "next/image";
import BagCart from "./BagCart";
import FavoriteBtn from "./FavoriteBtn";
import Loginbtn from "./Loginbtn";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "../menuItem/Menu";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import ProfileDropDown from "../userProfile/ProfileDropDown";

async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <div className="flex items-center justify-between gap-x-10 mt-10 ">
        <Logo />
        <Search inpage={false} />
        <div className=" items-center justify-center gap-x-[14px] hidden md:flex">
          {/* <FavoriteBtn /> */}
          {user ? <ProfileDropDown /> : <Loginbtn />}
          <BagCart />
        </div>
        <div className="md:hidden">
          <Image alt="" src="/images/menu.svg" width={24} height={24} />
        </div>
      </div>
      <Search inpage={true} />
      <Menu />
    </>
  );
}

export default Header;
