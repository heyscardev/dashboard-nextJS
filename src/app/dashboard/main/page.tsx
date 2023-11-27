import { SimpleWidget } from "@/components";
import { CartCounter } from "@/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashoboard",
  description: "administration panel for admins",
};
export default function MainPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SimpleWidget />
    </div>
  );
}
