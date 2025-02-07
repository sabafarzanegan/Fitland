import * as React from "react";

import { cn } from "../../../utils/lib";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, title, ...props }, ref) => {
    return (
      <div className="relative">
        <label className="absolute -top-2 right-3 bg-white px-1 text-sm text-gray-700">
          {title}
        </label>
        <input
          type={type}
          className={cn(
            "w-full border border-gray-400 rounded-lg py-2 px-3 pr-10 text-right focus:outline-none focus:ring-1 focus:ring-secondary-400",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
