import React from "react";

function FooterLinks({
  title,
  listItems,
}: {
  title: string;
  listItems: string[];
}) {
  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center text-[14px]">
        <p className=" text-white font-semibold mb-6 mt-3">{title}</p>
        <ul className="list-disc space-y-4 text-neutral-300">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
