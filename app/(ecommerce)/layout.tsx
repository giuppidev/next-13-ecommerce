export default function PippoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="bg-blue-500">Ecommerce layout</h1>
      {children}
    </section>
  );
}
