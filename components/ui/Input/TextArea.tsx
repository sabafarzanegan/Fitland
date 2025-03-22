import * as React from "react";

import { cn } from "../../../utils/lib";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, title, ...props }, ref) => {
  return (
    <div className="relative">
      <label className="absolute -top-2 right-3 bg-white px-1 text-sm text-gray-700">
        {title}
      </label>
      <textarea
        className={cn(
          "w-full border border-gray-400 rounded-lg py-2 px-3 pr-10 text-right focus:outline-none focus:ring-1 focus:ring-secondary-400",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
TextArea.displayName = "Input";

export { TextArea };
