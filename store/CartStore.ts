import { create } from "zustand";
import { persist } from "zustand/middleware";
interface cartItem {
  productId: string;
  size: string;
  color: string;
  qt: number;
  price?: number;
  discountPrice?: number | null;
}

type CartStore = {
  cart: cartItem[];
  addToCart: (item: cartItem) => void;
  removeFromCart: (item: cartItem) => void;
  clearCart: () => void;
  deletItem: (cartItem: cartItem) => void;
};
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      deletItem: (item) => {
        set((state) => {
          const updatedcart = state.cart.map((cartItem) => {
            if (
              cartItem.productId === item.productId &&
              cartItem.size === item.size &&
              cartItem.color === item.color
            ) {
              return {
                ...cartItem,
                qt: 0,
              };
            }
            return cartItem;
          });
          return {
            cart: updatedcart.filter((cartItem) => cartItem.qt > 0),
          };
        });
      },
      clearCart: () => set({ cart: [] }),
      addToCart: (item) =>
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (cartItem) =>
              cartItem.productId === item.productId &&
              cartItem.size === item.size &&
              cartItem.color === item.color
          );

          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              qt: updatedCart[existingItemIndex].qt + item.qt,
            };
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, item] };
          }
        }),

      removeFromCart: (item) =>
        set((state) => {
          const updatedCart = state.cart.map((cartItem) => {
            if (
              cartItem.productId === item.productId &&
              cartItem.size === item.size &&
              cartItem.color === item.color
            ) {
              return {
                ...cartItem,
                qt: cartItem.qt - 1,
              };
            }
            return cartItem;
          });

          return {
            cart: updatedCart.filter((cartItem) => cartItem.qt > 0),
          };
        }),
    }),

    { name: "cart-storage" }
  )
);
