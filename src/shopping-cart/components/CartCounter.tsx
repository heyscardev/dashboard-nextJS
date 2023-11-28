"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounter,
  substractOne,
} from "@/store/counter/counterSlice";
import React, { useEffect, useState } from "react";
interface Props {
  initialValue?: number;
}
interface CounterResponse {
  count: number;
}
//get counter api for first initialization
const getApiCounter = async (): Promise<CounterResponse> => {
  const data: CounterResponse = await fetch("/api/counter").then((res) =>
    res.json()
  );
  return data;
};
export const CartCounter = ({ initialValue = 10 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounter(data.count));
    });
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

export default CartCounter;
