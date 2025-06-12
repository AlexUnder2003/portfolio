import NavbarBlurred from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen w-full ">
      <NavbarBlurred />
      <main className="flex-grow pt-1 px-2">
        {children}
      </main>
    </div>
  );
}
