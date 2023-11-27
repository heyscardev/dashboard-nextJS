import { IoCart } from "react-icons/io5";

export const SimpleWidget = () => {
  return (
    <div className="bg-white shadow-2xl p-4 w-64 rounded-lg border-2 border-gray-50">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="font-bold text-gray-600 text-center">Shopping cart</h2>
        </div>
        <div className="my-6">
          <div className="flex flex-row space-x-4 items-center">
            <div id="icon">
              <span>
                <IoCart className="text-7xl" />
              </span>
            </div>
            <div id="temp">
              <h4 className="text-4xl">title</h4>
              <p className="text-xs text-gray-500">subtitle</p>
            </div>
          </div>
        </div>
        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <a href="#" className="text-indigo-600 text-xs font-medium">
            ver mas
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleWidget;
