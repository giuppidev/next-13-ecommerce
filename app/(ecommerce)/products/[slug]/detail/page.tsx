export default function Page({ params }: { params: { slug: string } }) {
  return <div>My product: {params.slug}</div>;
}
