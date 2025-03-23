import { favoriteHandler, findFavoriteProduct } from "@/utils/actions";
import React from "react";
import FavoriteBtn from "./FavoriteBtn";

async function FavoriteForm({
  productId,
  userId,
}: {
  productId: string | undefined;
  userId: string | undefined;
}) {
  const findedFavoriteProduct = await findFavoriteProduct(productId);
  console.log(findedFavoriteProduct);

  return (
    <div>
      <form action={favoriteHandler}>
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="productId" value={productId} />
        <FavoriteBtn findProduct={findedFavoriteProduct?.id}/>
      </form>
    </div>
  );
}

export default FavoriteForm;
