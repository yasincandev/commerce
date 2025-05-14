import { cn } from "@/components/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  slug: string;
  className?: string;
}

export function ProductCard({
  name,
  price,
  imageUrl,
  slug,
  className,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className={cn("group block", className)}>
      <div className='relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3'>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col'>
        <h3 className='text-sm font-medium'>{name}</h3>
        <p className='text-sm'>${price}</p>
      </div>
    </Link>
  );
}
