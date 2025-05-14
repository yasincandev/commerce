import Link from "next/link"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNav() {
  return (
    <div className="flex flex-col h-full pt-6">
      <Link href="/" className="mb-8 text-xl font-bold tracking-wider">
        KIMO.NU
      </Link>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="shop">
          <AccordionTrigger className="text-base font-medium">SHOP</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="/collections/all" className="py-2">
                Shop All
              </Link>
              <Link href="/collections/new-arrivals" className="py-2">
                New Arrivals
              </Link>
              <Link href="/collections/best-sellers" className="py-2">
                Best Sellers
              </Link>
              <Link href="/collections/artistic" className="py-2">
                Artistic Collection
              </Link>
              <Link href="/collections/art-manifesto" className="py-2">
                Art Manifesto Collection
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="about">
          <AccordionTrigger className="text-base font-medium">ABOUT</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              <Link href="/about" className="py-2">
                Our Story
              </Link>
              <Link href="/about/artists" className="py-2">
                Our Artists
              </Link>
              <Link href="/about/process" className="py-2">
                Our Process
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-auto pt-6 border-t">
        <div className="flex flex-col space-y-4">
          <Link href="/account" className="text-sm">
            Account
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
          <Link href="/faq" className="text-sm">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  )
}
