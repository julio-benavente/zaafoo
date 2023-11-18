import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-yellow-50 min-h-screen grid grid-cols-1 grid-rows-[1fr_auto]">
      <main className="max-h-[calc(100vh-4rem)] overflow-y-auto">
        {children}
      </main>
      <Sidebar />
    </section>
  );
}
