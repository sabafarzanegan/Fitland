import { getColor, getProductById, getSize } from "@/utils/actions";
import { OrderItem } from "@prisma/client";
import Image from "next/image";

interface propsType {
  item: OrderItem;
}

async function OrderCart({ item }: propsType) {
  const product = await getProductById(item.productId);
  const size = await getSize(item?.sizeId as string);
  const color = await getColor(item?.colorId as string);

  return (
    <div className="flex flex-col items-center justify-center gap-y-2 mt-2">
      <div>
        <Image
          src={product?.images[0]?.url as string}
          alt=""
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>

      <div className="flex items-center justify-between gap-x-2">
        <p>{size?.value}</p>
        <div
          style={{ backgroundColor: color?.hex }}
          className="w-4 h-4 rounded-full"></div>
      </div>
    </div>
  );
}

export default OrderCart;
