// File: layouts/default.tsx
import NavbarBlurred from "@/components/navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat">
      <NavbarBlurred/>
      {/* flex-1 чтобы main занимал всё оставшееся место */}
      <main className="flex-1 flex flex-col pt-1 px-2">
        {children}
      </main>
    </div>
  );
}