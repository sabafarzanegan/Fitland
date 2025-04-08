import Branding from "@/components/hoom/Branding";
import Poster1 from "@/components/hoom/posters/Poster1";
import Poster2 from "@/components/hoom/posters/Poster2";

import SalesSection from "@/components/hoom/slaes/SalesSection";
import ShoesSection from "@/components/hoom/slaes/ShoesSection";
import Landing from "@/components/landing/Landing";

function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" flex-1">
        <Landing />
        <Branding />
        <Poster1 />
        <div className="bg-[#FFF7F4] py-3">
          <SalesSection />
        </div>
        <Poster2 />
        <ShoesSection />
      </div>
    </div>
  );
}

export default page;
