"use client";

interface ProductProps {
  name: string;
  id: number;
}

export default function Product({ name, id }: ProductProps) {
  async function deleteProduct() {
    await fetch(`/backend?id=${id}`);
  }
  return (
    <div>
      {name}
      <button onClick={deleteProduct}>CLICK</button>
    </div>
  );
}
