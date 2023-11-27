import { CartCounter } from "@/shopping-cart";

export default function MainPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <CartCounter value={10} />
    </div>
  );
}
