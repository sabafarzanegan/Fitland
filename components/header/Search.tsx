"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Search({ inpage }: { inpage: boolean }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?query=${query}`);
      setTimeout(() => {
        setQuery("");
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative container ${
        inpage
          ? "w-full block lg:hidden mt-[14px]"
          : "w-[600px] hidden lg:block"
      }`}>
      <input
        className="border border-neutral-300 focus:border-primary-400 text-neutral-600 w-full py-2 rounded-[16px] pr-[34px] bg-neutral-100"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center gap-x-[3px] absolute top-2 right-2">
        <Image
          alt="search icon"
          width={24}
          height={24}
          src="/images/search-normal.svg"
        />
        {!query && <span className=" text-neutral-500 text-[14px]">جستجو</span>}
      </button>
    </form>
  );
}

export default Search;
