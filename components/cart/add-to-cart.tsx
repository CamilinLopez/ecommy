"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import LoadingDots from "../loading-dots";
import { ProductVariant } from "../lib/shopify/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const isPending = true;
  const selectedVariantId = 0;
  const title = "Out of stock";

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending || !availableForSale || !selectedVariantId}
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale || !selectedVariantId) return;
      }}
      className={clsx(
        "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90",
        {
          "cursor-not-allowed opacity-60 hover:opacity-60":
            !availableForSale || !selectedVariantId,
          "cursor-not-allowed": isPending,
        }
      )}
    >
      <div className="absolute left-0 ml-4">
        {!isPending ? (
          <PlusIcon className="h-5" />
        ) : (
          <LoadingDots className="mb-3 bg-white" />
        )}
      </div>
      <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
    </button>
  );
}
