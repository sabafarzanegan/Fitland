"use client";
import React, { ReactNode, useState } from "react";

function DescriptonProduct({
  children,
  isFooter,
}: {
  children: string;
  isFooter?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children?.split(" ").slice(0, 60).join(" ") + "...";
  return (
    <div>
      <span>
        {displayText}
        {children?.length > 60 && (
          <button
            className={`${
              isFooter ? "text-secondary-0" : "text-secondary-700"
            }  border-b border-secondary-main leading-3 pb-1`}
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
          </button>
        )}
      </span>
    </div>
  );
}

export default DescriptonProduct;
