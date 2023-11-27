import Link from "next/link";
import { IoCart } from "react-icons/io5";
interface Props {
  label?: string;
  title?: string;
  subtitle?: string;
  href?: string;
  icon?: React.ReactNode;
}
export const SimpleWidget = ({ href, icon, title, subtitle, label }: Props) => {
  return (
    <div className="bg-white shadow-2xl px-6 py-3 rounded-lg border-2  border-gray-50">
      <div className="flex flex-col h-full  items-center  ">
        {label && (
          <div>
            <h2 className="font-bold  text-gray-600 text-center">{label}</h2>
          </div>
        )}
        <div className="my-2 flex-grow flex items-center">
          <div className="flex flex-row space-x-4 items-center">
            {icon && (
              <div>
                <span>{icon}</span>
              </div>
            )}
            {(title || subtitle) && (
              <div className="text-center">
                {title && <h4 className="text-4xl">{title}</h4>}
                {subtitle && (
                  <p className="text-xs text-gray-500">{subtitle}</p>
                )}
              </div>
            )}
          </div>
        </div>
        {href && (
          <div className="w-full place-items-end text-right border-t-2 mt-2  border-gray-100">
            <Link href={href} className="text-indigo-600 text-xs font-medium">
              ver mas
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleWidget;
