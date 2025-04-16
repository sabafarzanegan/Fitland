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

  return (
    <form action={favoriteHandler} className="mt-2">
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="productId" value={productId} />
      <FavoriteBtn findProduct={findedFavoriteProduct?.id} />
    </form>
  );
}

export default FavoriteForm;
