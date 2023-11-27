import { IoCart } from "react-icons/io5";
import { Counter } from "..";
interface Props {
  value: number;
}
export const CartCounter = ({ value }: Props) => {
  return (
    <div className="mx-auto  right-0 mt-2 w-60 ">
      <div className="text-center border-none p-6 bg-slate-400  border-b flex items-center justify-end flex-col   rounded   shadow-lg ">
        <IoCart className="text-gray-900 text-8xl" />
        <p className=" text-2xl font-semibold capitalize text-gray-50">
          Shopping cart
        </p>
        <Counter initialValue={value} />
      </div>
    </div>
  );
};

export default CartCounter;
