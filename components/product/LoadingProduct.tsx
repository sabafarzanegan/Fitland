import Skeleton from "../loading/Skeleton";

function LoadingProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 container">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

export default LoadingProduct;
