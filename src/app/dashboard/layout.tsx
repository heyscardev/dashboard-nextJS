import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-gray-900 selection:bg-blue-600 selection:text-white">
      <div className="flex ">
        <Sidebar /> <div className="w-full p-2 ">{children}</div>
      </div>
    </div>
  );
}
