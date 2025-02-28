"use client";
import React, { ReactNode, useState } from "react";

function DescriptonProduct({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children?.split(" ").slice(0, 80).join(" ") + "...";
  return (
    <div>
      <span>
        {displayText}
        {children?.length > 80 && (
          <button
            className="text-secondary-main border-b border-secondary-main leading-3 pb-1"
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
          </button>
        )}
      </span>
    </div>
  );
}

export default DescriptonProduct;
