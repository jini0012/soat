export default function BookSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full gap-y-3 max-w-2xl">
      {children}
    </section>
  );
}
