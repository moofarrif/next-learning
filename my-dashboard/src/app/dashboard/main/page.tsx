import { WidgetGrid } from "@/components";
import { NextPage } from "next";

export const metadata = {
  title: "Main Page",
  description: "Main page Dashboard",
};
const MainPage: NextPage = () => {
  return (
    <div className="text-black p-2">
      <span className="text-4xl font-bold text-center text-gray-800 p-2">
        Dashboard
      </span>

      <div className="flex flex-wrap gap-10 items-center justify-center">
        <WidgetGrid />
      </div>
    </div>
  );
};

export default MainPage;
