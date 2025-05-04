export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center justify-center min-h-[calc(100vh-4rem)] pt-8">
      {children}
    </div>
  );
}
