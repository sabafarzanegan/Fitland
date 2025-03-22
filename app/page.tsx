import BrandCart from "@/components/card/BrandCart";
import Branding from "@/components/hoom/Branding";
import Poster1 from "@/components/hoom/posters/Poster1";
import Poster2 from "@/components/hoom/posters/Poster2";
import SalesSection from "@/components/hoom/slaes/SalesSection";
import Landing from "@/components/landing/Landing";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="h-screen ">
      <div className="container">
        <Landing />
      </div>
      {/* brand1 */}
      <Branding />
      {/* poster1 */}
      <Poster1 />
      {/* sales */}
      <div className="bg-[#FFF7F4]">
        <SalesSection />
      </div>
      {/* poster2 */}
      <Poster2 />
    </div>
  );
}

export default page;
