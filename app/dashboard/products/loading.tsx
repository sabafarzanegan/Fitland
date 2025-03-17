import Loading from "@/components/loading/Loading";
import Skeleton from "@/components/loading/Skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex items-center justify-center">
      <Loading />
    </div>
  );
}

export default loading;
