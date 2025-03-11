import Link from "next/link";

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({ title, href, icon, label, subTitle }: Props) => {
  return (
    <div className="bg-white shadow-lg p-6 sm:min-w-[25%] min-w-full rounded-2xl border border-gray-300 m-4 ">
      <div className="flex flex-col items-center">
        {label && (
          <h2 className="font-semibold text-gray-700 text-center mb-3">
            {label}
          </h2>
        )}
        <div className="my-4">
          <div className="flex flex-row items-center justify-center space-x-3">
            {icon}
            <div className="text-center">
              <h4 className="text-3xl font-bold text-gray-800">{title}</h4>
              {subTitle && (
                <p className="text-sm text-gray-500 mt-1">{subTitle}</p>
              )}
            </div>
          </div>
        </div>
        {href && (
          <div className="w-full text-right border-t border-gray-200 mt-4 pt-3">
            <Link
              href={href}
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              Modify
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
