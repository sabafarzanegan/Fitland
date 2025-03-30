import ProductAdItem from "./ProductAdItem";

function ProductAd() {
  return (
    <div className="w-full my-20  items-center justify-center hidden lg:flex ">
      <div className="flex items-center gap-x-6">
        <ProductAdItem src="/images/truck-tick.svg" title="ارسال سریع" />
        <ProductAdItem src="/images/paypal.png" title="پرداخت قسطی" />
        <ProductAdItem src="/images/truck-tick.svg" title="پرداخت در منزل" />
        <p className="text-secondary-850 text-[26px] font-semibold">
          با بیش از ده سال سابقه فروش <br />
          لوازم ورزشی و لباس های ورزشی
        </p>
      </div>
    </div>
  );
}

export default ProductAd;
