"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, setCounter, substractOne } from "@/store/counter/counterSlice";
import React, { useEffect, useState } from "react";
interface Props {
  initialValue?: number;
}
export const Counter = ({ initialValue = 10 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCounter(initialValue));
  }, [initialValue, dispatch]);
  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="text-9xl text-gray-900">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Counter;
