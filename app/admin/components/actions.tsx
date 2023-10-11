"use client";

export default function ProductActions({
  productId,
  deleteProduct,
}: {
  productId: number;
  deleteProduct: (id: number) => void;
}) {
  return (
    <>
      <a
        href={`/admin/edit/${productId}`}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit
      </a>
      <button
        className="text-indigo-600 hover:text-indigo-900"
        onClick={() => deleteProduct(productId)}
      >
        Delete
      </button>
    </>
  );
}
