import type { Metadata } from "next";
import { Counter } from "@/components";

export const metadata: Metadata = {
  title: "Counter",
  description: "counter rendered by client of page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span className="text-gray-900">Shopcart Products</span>
      <Counter initialValue={15} />
    </div>
  );
}
