import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100  w-screen h-screen antialiased text-gray-900 selection:bg-blue-600 selection:text-white">
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="w-full  h-full overflow-auto ">{children}</div>
      </div>
    </div>
  );
}
