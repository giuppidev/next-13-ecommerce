import Product from "@/components/product";
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "@/prisma/generated/client";
export default async function Home() {
  const products: ProductType[] = await prisma.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map((product) => (
        <Product name={product.name} id={product.id} />
      ))}
    </main>
  );
}
