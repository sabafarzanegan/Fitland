"use client";
import { Heart, Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function FavoriteBtn({ findProduct }: { findProduct: string | undefined }) {
  const { pending } = useFormStatus();
  return (
    <div>
      <button type="submit">
        {pending ? (
          <Loader2 className="animate-spin transition-all duration-150" />
        ) : (
          <Heart
            className={`${findProduct ? "text-red-700 fill-red-700" : ""}`}
          />
        )}
      </button>
    </div>
  );
}

export default FavoriteBtn;
