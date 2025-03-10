import { NextPage } from "next";

export const metadata = {
  title: "Main Page",
  description: "Main page Dashboard",
};
const MainPage: NextPage = () => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div className="flex flex-col gap-8 text-left">
        <h2 className="block font-sans text-4xl font-semibold leading-[1.3] tracking-normal  antialiased text-gray-900">
          Main page Dashboard
        </h2>
      </div>
    </div>
  );
};

export default MainPage;
