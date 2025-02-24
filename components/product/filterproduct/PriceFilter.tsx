function PriceFilter() {
  return (
    <div>
      <p>قیمت</p>
      <input type="range" className="w-full" />
      <div className="flex items-center justify-between">
        <span>کم</span>
        <span>زیاد</span>
      </div>
    </div>
  );
}

export default PriceFilter;
