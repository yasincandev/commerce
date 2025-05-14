import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Product {
  name: string
  price: number
  imageUrl: string
  slug: string
}

interface FeaturedCollectionProps {
  title: string
  products: Product[]
}

export function FeaturedCollection({ title, products }: FeaturedCollectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto">
            <Image src="/images/featured-collection.jpg" alt="Featured collection" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-6 md:p-8 max-w-md text-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wider mb-4">{title}</h2>
                <p className="mb-6">
                  Discover our latest artistic kimonos that blend Japanese minimalism with European spirit.
                </p>
                <Link href="/collections/latest" className="group inline-flex items-center text-sm font-medium">
                  EXPLORE THE LATEST
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
