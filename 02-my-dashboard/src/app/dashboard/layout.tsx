import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-white selection:bg-blue-600 selection:text-white">
      <div className="flex ">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
