"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, init } from "@/store/counter/counterSlice";

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> =>
  await fetch("/api/counter").then((res) => res.json());

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(dispatch(init(value)));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(init(count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className=" flex items-center justify-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
