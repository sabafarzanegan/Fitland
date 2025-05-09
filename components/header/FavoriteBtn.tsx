import Image from "next/image";

function FavoriteBtn() {
  return (
    <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.08)] w-[48px] h-[48px] rounded-[12px] bg-white flex items-center justify-center cursor-pointer">
      <Image width={48} height={48} src="/images/heart.svg" alt="" />
    </div>
  );
}

export default FavoriteBtn;
