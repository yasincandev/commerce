import { Carousel } from "@/components/carousel";
import { CategorySection } from "@/components/category-section";
import EmblaCarousel from "@/components/embla-carousel";
import { HeroSection } from "@/components/hero-section";
import Footer from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { getCollectionProducts } from "@/lib/shopify";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const homepageItems = await getCollectionProducts({
    collection: "frontpage",
  });
  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  return (
    <div className='flex min-h-screen flex-col'>
      <HeroSection />
      <section className='container py-12 md:py-16 mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-bold tracking-wide'>BEST SELLERS</h2>
          <Link
            href='/collections/all'
            className='text-sm font-medium flex items-center'
          >
            View all <ArrowRight className='ml-1 h-4 w-4' />
          </Link>
        </div>
        <EmblaCarousel products={homepageItems} />
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
          {homepageItems.map((item) => (
            <ProductCard
              key={item.id}
              name={item.title}
              price={item.priceRange.maxVariantPrice.amount}
              imageUrl={item.featuredImage.url}
              slug={item.handle}
              className='hidden md:block'
            />
          ))}
        </div>
      </section>
      <CategorySection
        title='HAND-PAINTED DESIGNS WITH ARTISTIC EXPRESSION'
        imageUrl='/images/category-1.jpg'
        description='Each pattern is born from the hands of our artists'
        linkText='SHOP ARTISTIC COLLECTION'
        linkHref='/collections/artistic'
      />
      <Carousel />
      <Footer />
    </div>
  );
}
