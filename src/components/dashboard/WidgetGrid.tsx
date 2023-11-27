"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCart } from "react-icons/io5";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <section className="flex  p-4  w-full gap-4 justify-center ">
      <SimpleWidget
        label="shopping cart"
        icon={<IoCart size={60} />}
        subtitle="Productos"
        title={count.toString()}
        href="/dashboard/counter"
      />
      <SimpleWidget
        label="shopping cart"
        icon={<IoCart size={60} />}
        subtitle="Productos"
        title={count.toString()}
      />
      <SimpleWidget
        label="shopping cart"
        icon={<IoCart size={60} />}
        subtitle="Productos"
        title={count.toString()}
      />
      <SimpleWidget subtitle="Productos" title={count.toString()} />
      <SimpleWidget />
    </section>
  );
};

export default WidgetGrid;
