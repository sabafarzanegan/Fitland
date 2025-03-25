"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface props {
  items: { title: string; listItems: string[]; idx: number }[];
}

function Accordion({ items }: props) {
  const list = items.map((item, idx) => {
    return { ...item, open: false, idx: idx };
  });
  const [accordion, setAccordion] = useState<
    {
      title: string;
      listItems: string[];
      idx: number;
      open: boolean;
    }[]
  >(list);

  const accordionHandler = (item: {
    title: string;
    listItems: string[];
    idx: number;
  }) => {
    setAccordion(
      accordion.map((listItem) => {
        if (item.idx === listItem.idx) {
          return { ...listItem, open: !listItem.open };
        }
        return listItem;
      })
    );
  };
  return (
    <div className="block md:hidden w-full space-y-6 mt-8">
      {accordion.map((item, index) => (
        <div className="w-full" key={index}>
          <h2 className="w-full">
            <button
              type="button"
              onClick={() => accordionHandler(item)}
              className="flex items-center justify-between pb-4 border-b  border-b-secondary-400 w-full tex-[14px]">
              <span>{item.title}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  item.open ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div
            className={`${
              !item.open ? "hidden" : "transition-transform duration-200 "
            }`}>
            <ul className="list-disc space-y-4 text-neutral-300 py-4">
              {item.listItems.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
