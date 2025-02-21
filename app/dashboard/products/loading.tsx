import Skeleton from "@/components/loading/Skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex items-center justify-between">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

export default loading;
