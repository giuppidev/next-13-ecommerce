"use client";

interface ProductProps {
  name: string;
}

export default function Product({ name }: ProductProps) {
  return (
    <div>
      {name}
      <button onClick={() => console.log("CLICK")}>CLICK</button>
    </div>
  );
}
