"use client";
import React, { useState } from "react";
interface Props {
  initialValue?: number;
}
export const Counter = ({ initialValue = 10 }: Props) => {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="text-9xl text-gray-900">{count}</span>
      <div className="flex">
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Counter;
