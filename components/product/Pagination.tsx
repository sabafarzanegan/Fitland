"use client";

import { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronsRight } from "lucide-react";
interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex gap-2 py-2 items-center justify-center">
      <button
        className="bg-secondary-main text-white p-1 rounded-full disabled:bg-neutral-500 "
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}>
        <ChevronsRight className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-x-1 text-md">
        <span>{Number(page).toLocaleString("fa-IR")}</span>
      </div>

      <button
        className="bg-secondary-main text-white p-1 rounded-full disabled:bg-neutral-500"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}>
        <ChevronsRight className="rotate-180 w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
