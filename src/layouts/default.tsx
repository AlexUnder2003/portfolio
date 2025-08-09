import NavbarBlurred from "@/components/navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[url('/bgwhite.jpg')] dark:bg-[url('/bgdark.jpg')] bg-cover bg-center bg-no-repeat">
      <NavbarBlurred/>
      <main className="flex-1 flex flex-col pt-1 px-2">
        {children}
      </main>
    </div>
  );
}