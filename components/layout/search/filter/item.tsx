"use client";

import clsx from "clsx";
import { SortFilterItem } from "@/components/lib/constants";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ListItem, PathFilterItem } from ".";

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const searchParams = useSearchParams();
  const hasParams = searchParams !== null;
  const params = hasParams ? searchParams.toString() : null;
  const href = { pathname: item.path, query: params };
  return (
    <li className="mt-2 flex text-black dark:text-white" key={item.title}>
      <Link
        href={href}
        className={clsx(
          "w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100",
          {
            // "underline underline-offset-4": active,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const href = {
    pathname: !pathname ? "/search" : pathname,
    query: item.slug && { sort: item.slug },
  };

  return (
    <li
      className="mt-2 flex text-sm text-black dark:text-white"
      key={item.title}
    >
      <Link
        href={href}
        className={clsx("w-full hover:underline hover:underline-offset-4", {
          // 'underline underline-offset-4': active
        })}
      >
        {item.title}
      </Link>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
