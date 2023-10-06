"use client";

import { Product as ProductType } from "@/prisma/generated/client";
import Product from "./product";

interface ProductProps {
  products: ProductType[];
}

export default function Pricing({ products }: ProductProps) {
  return (
    <section className="bg-white w-full">
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              No Contracts. No surorise fees.
            </p>
          </div>
        </div>

        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
