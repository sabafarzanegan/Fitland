"use client";
import { Heart, Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function FavoriteBtn({ findProduct }: { findProduct: string | undefined }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit">
      {pending ? (
        <Loader2 className="animate-spin transition-all duration-150" />
      ) : (
        <Heart
          width={18}
          height={18}
          className={`${findProduct ? "text-red-700 fill-red-700" : ""}`}
        />
      )}
    </button>
  );
}

export default FavoriteBtn;
