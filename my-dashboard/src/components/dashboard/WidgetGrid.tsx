"use client";

import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <SimpleWidget
      title={`${isCart}`}
      subTitle="added products "
      label="Counter"
      href="/dashboard/counter"
      icon={<IoCartOutline size={70} className="text-blue-400" />}
    />
  );
};
