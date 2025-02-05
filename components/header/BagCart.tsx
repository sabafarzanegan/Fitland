function BagCart() {
  const number = 0;
  return (
    <div className="relative w-[48px] h-[48px] cursor-pointer bg-primary-main flex items-center justify-center rounded-[12px]">
      <img src="/images/bag-2.svg" alt="" />
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-secondary-main text-white flex items-center justify-center text-body-7 rounded-full">
        {number.toLocaleString("fa-IR")}
      </div>
    </div>
  );
}

export default BagCart;
