export default function PippoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="bg-red-500">Pippo layout</h1>
      {children}
    </section>
  );
}
