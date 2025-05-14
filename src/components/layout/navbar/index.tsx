import CartModal from "@/components/cart/modal";
import LogoIcon from "@/components/icons/logo";
import { getMenu } from "@/lib/shopify";
import { Menu as MenuType } from "@/lib/shopify/types";
import { User } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("main-menu");

  return (
    <header className='sticky top-0 z-50 w-full border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-white'>
      <div className='container mx-auto grid grid-cols-3 items-center h-16 px-4 sm:px-6 lg:px-8'>
        {/* LEFT: Mobile menu + Logo */}
        <div className='flex items-center space-x-4'>
          <div className='md:hidden'>
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link
            href='/'
            prefetch={true}
            aria-label={SITE_NAME ? `${SITE_NAME} Homepage` : "Homepage"}
            className='text-xl font-bold tracking-wider uppercase'
          >
            <LogoIcon className='h-[30px] w-[90px]' />
          </Link>
        </div>

        {/* CENTER: Desktop nav */}
        <nav className='hidden md:flex justify-center'>
          <ul className='flex gap-x-4 text-sm'>
            {menu.map((item: MenuType) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className={`
                  font-medium transition-colors whitespace-nowrap uppercase
                  ${
                    item.title.toLowerCase() === "sale"
                      ? "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                      : "text-black hover:text-black dark:text-black dark:hover:text-white"
                  }
                `}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: social, account, search, cart */}
        <div className='flex items-center justify-end space-x-3'>
          <Link
            href='#'
            aria-label='TikTok'
            className='text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
          >
            <svg
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <title>TikTok</title>
              <path d='…' />
            </svg>
          </Link>
          <Link
            href='/account'
            aria-label='Account'
            className='text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
          >
            <User className='h-5 w-5' />
          </Link>

          {/* Search: only on desktop */}
          <div className='hidden md:block'>
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>

          {/* Cart */}
          <CartModal />
        </div>
      </div>
    </header>
  );
}
