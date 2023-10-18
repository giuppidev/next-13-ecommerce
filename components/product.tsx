import { handlePayment } from "@/app/actions";
import { Product as ProductType } from "@/prisma/generated/client";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
      <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
        {product.name}
      </p>
      <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
        ${product.price.toString()}
      </h4>
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        {product.description}
      </p>

      <button
        onClick={() => handlePayment(product.stripePriceId)}
        className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Choose plan
      </button>
    </div>
  );
}
