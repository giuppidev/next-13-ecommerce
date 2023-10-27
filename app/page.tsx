import { Testimonials } from "@/components/testimonials";
import { Faqs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "prisma/prisma-client/";
import { normalizeObject } from "@/utils/helper";

export default async function Home() {
  const products: ProductType[] = await prisma.product.findMany();

  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing products={normalizeObject(products)} />
      <Faqs />
    </main>
  );
}
