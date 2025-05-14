import { cn } from "@/components/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategorySectionProps {
  title: string;
  imageUrl: string;
  description: string;
  linkText: string;
  linkHref: string;
  reverse?: boolean;
}
const videoURL = "/category-video.mp4";

export function CategorySection({
  title,
  imageUrl,
  description,
  linkText,
  linkHref,
  reverse = false,
}: CategorySectionProps) {
  return (
    <section className='py-12 md:py-16 container mx-auto'>
      <div
        className={cn(
          "container grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
          reverse && "md:[&>div:first-child]:order-last"
        )}
      >
        <div className='relative aspect-video'>
          <video src={videoURL} autoPlay muted loop className='object-cover' />
        </div>
        <div className='flex flex-col items-start justify-center max-w-md mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-wider mb-4'>
            {title}
          </h2>
          <p className='text-lg mb-8'>{description}</p>
          <Link
            href={linkHref}
            className='group inline-flex items-center text-sm font-medium'
          >
            {linkText}
            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </section>
  );
}
