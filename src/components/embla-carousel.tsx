"use client";

import { Product } from "@/lib/shopify/types";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { ProductCard } from "./product-card";

interface EmblaCarouselProps {
  products: Product[];
}

export default function EmblaCarousel({ products }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla mx-auto mt-12 max-w-full'>
      <div className='embla__viewport h-56 border' ref={emblaRef}>
        <div className='embla__container h-full'>
          {products.map((product) => (
            <div className='embla__slide flex items-center justify-center'>
              <ProductCard
                key={product.id}
                name={product.title}
                price={product.priceRange.maxVariantPrice.amount}
                imageUrl={product.featuredImage.url}
                slug={product.handle}
                className='hidden md:block'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-3 flex justify-between'>
        <button
          className='w-20 bg-black px-2 py-1 text-sm text-white'
          onClick={scrollPrev}
        >
          <ArrowLeft className='h-4 w-4' />
        </button>
        <button
          className='w-20 bg-black px-2 py-1 text-sm text-white'
          onClick={scrollNext}
        >
          <ArrowRight className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}
