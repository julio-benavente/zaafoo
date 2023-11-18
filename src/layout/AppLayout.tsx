import cn from "@/helpers/cn";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={cn(
        "bg-yellow-50 min-h-screen grid grid-cols-1 grid-rows-[1fr_auto]",
        "lg:grid-cols-[300px_1fr] lg:grid-rows-none"
      )}
    >
      <main
        className={cn("max-h-[calc(100vh-4rem)] overflow-y-auto", "lg:order-2")}
      >
        {children}
      </main>
      <Sidebar />
    </section>
  );
}
