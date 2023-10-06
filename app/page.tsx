import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "@/prisma/generated/client";

export default async function Home() {
  const products: ProductType[] = await prisma.product.findMany();

  return (
    <main className="flex  flex-col items-center justify-between ">
      <Hero />
      <Pricing products={products} />
    </main>
  );
}
