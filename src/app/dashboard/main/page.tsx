import { WidgetGrid } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashoboard",
  description: "administration panel for admins",
};
export default function MainPage() {
  return (
    <div className=" flex h-full w-full flex-col ">
      <h1 className="text-5xl my-5 mx-4">Admin Dashboard</h1>

      <WidgetGrid />
    </div>
  );
}
