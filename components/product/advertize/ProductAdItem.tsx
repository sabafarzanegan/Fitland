import Image from "next/image";

function ProductAdItem({ src, title }: { src: string; title: string }) {
  return (
    <div className="flex flex-col justify-center items-center  gap-y-2 bg-secondary-0 w-[167px] h-[172px] rounded-[16px] border border-neutral-300">
      <div>
        <Image
          src={src}
          width={48}
          height={48}
          alt="
        "
        />
      </div>
      <div>
        <p className="text-secondary-main font-semibold">{title}</p>
      </div>
    </div>
  );
}

export default ProductAdItem;
