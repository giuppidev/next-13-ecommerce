import { Prisma, Product } from "@prisma/client";

const productsData: Partial<Product>[] = [
  {
    name: "Basic",
    description: "Our basic product",
    price: new Prisma.Decimal(19.99),
    image: "/images/helmet.jpg",
    stripePriceId: "price_1O2cHRAFbX2cbGKDYng6dpzV",
  },
  {
    name: "Premium",
    description: "A premium version of our product",
    price: new Prisma.Decimal(29.99),
    image: "/images/shirt.jpg",
    stripePriceId: "price_1O2fDNAFbX2cbGKDiZL7foDW",
  },
];

module.exports = {
  productsData,
};
