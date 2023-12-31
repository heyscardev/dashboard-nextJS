import { CartCounter } from "@/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter",
  description: "counter rendered by client of page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span className="text-gray-900">Shopcart Products</span>
      <CartCounter initialValue={15} />
    </div>
  );
}
