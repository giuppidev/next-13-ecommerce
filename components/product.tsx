"use client";
import { handlePayment } from "@/app/actions";
import { Product as ProductType } from "@prisma/client";
import { Button } from "./button";
import clsx from "clsx";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const { name, description, price, stripePriceId } = product;
  const featured = name === "Premium";
  return (
    <section
      className={clsx(
        "flex flex-col rounded-3xl px-6 sm:px-8",
        featured ? "order-first bg-blue-600 py-8 lg:order-none" : "lg:py-8"
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          "mt-2 text-base",
          featured ? "text-white" : "text-slate-400"
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        € {price.toString()}
      </p>

      <Button
        variant={featured ? "solid" : "outline"}
        color="white"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
        onClick={() => handlePayment(stripePriceId)}
      >
        Get started
      </Button>
    </section>
  );
}
