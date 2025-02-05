import Image from "next/image";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full   ">
      {/* login component */}
      <div className="flex items-center justify-center ">{children}</div>
    </div>
  );
}

export default layout;
