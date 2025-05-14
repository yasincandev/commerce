import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className='bg-black text-white'>
      <div className='container py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <Link
              href='/'
              className='text-xl font-bold tracking-wider mb-4 inline-block'
            >
              KIMO.NU
            </Link>
            <p className='max-w-md mb-6'>
              In February 2024, we founded Kimo.Nu to make art a part of
              everyday life. Our kimonos combine Japanese minimalism with the
              free spirit of Europe.
            </p>
            <div className='flex space-x-4'>
              <Button
                variant='ghost'
                size='icon'
                className='text-white hover:text-white/80'
              >
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-white hover:text-white/80'
              >
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-white hover:text-white/80'
              >
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className='font-medium mb-4'>SHOP</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/collections/all'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href='/collections/new-arrivals'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href='/collections/best-sellers'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href='/collections/artistic'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  Artistic Collection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium mb-4'>INFORMATION</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/shipping'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-sm text-gray-300 hover:text-white'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-white/20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='font-medium mb-4'>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <div className='flex max-w-md'>
                <Input
                  type='email'
                  placeholder='Your email address'
                  className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0'
                />
                <Button className='rounded-l-none'>Subscribe</Button>
              </div>
            </div>
            <div className='text-sm text-gray-400 md:text-right'>
              © {new Date().getFullYear()} Kimo.Nu. All rights reserved.
              <div className='mt-2 space-x-4'>
                <Link href='/privacy' className='hover:text-white'>
                  Privacy Policy
                </Link>
                <Link href='/terms' className='hover:text-white'>
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
