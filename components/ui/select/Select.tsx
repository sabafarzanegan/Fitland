import * as React from "react";
import { cn } from "../../../utils/lib";

interface SelectProps extends React.ComponentProps<"select"> {
  data: { id: number | string; value: string; name: string }[];
  title: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, data, title, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <label
          htmlFor="province"
          className={cn(
            "absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1"
          )}>
          {title}
        </label>
        <select
          {...props}
          ref={ref}
          id="province"
          name="province"
          className="w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-400">
          {data.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
