import MobileMenu from "./mobile-menu";
import LogoSquare from "@/components/logo-square";
import Link from "next/link";
import { menu, Menu } from "./menu";
import Search from "./search";
import { Suspense } from "react";
import OpentCart from "@/components/cart/opent-cart";
import Cart from "@/components/cart";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>

      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              ECOMMY
            </div>
          </Link>
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpentCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
