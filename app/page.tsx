import Product from "@/components/product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Product name={products[0].title} />
    </main>
  );
}
