import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  url: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = ({ selected, url, onClick }) => {
  return (
    <div
      className={`embla-thumbs__slide ${
        selected ? "embla-thumbs__slide--selected" : ""
      }`}
      onClick={onClick}>
      <Image
        loading="lazy"
        src={url}
        width={80}
        height={80}
        alt="Thumbnail"
        className={`embla-thumbs__image cursor-pointer rounded-[8px] border border-neutral-600 w-[80px] h-[80px] ${
          selected && "border-primary-700 border-2"
        }`}
      />
    </div>
  );
};
