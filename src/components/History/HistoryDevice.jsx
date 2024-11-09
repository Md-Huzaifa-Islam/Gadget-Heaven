import PropTypes from "prop-types";
import { useContext } from "react";
import HistoryContext from "../../context/purchasecontext";

const HistoryDevice = ({ device }) => {
  const { removeFromHistory } = useContext(HistoryContext);
  const handleremove = () => {
    removeFromHistory(device);
  };
  const { product_title, product_image, Specification, price } = device;
  return (
    <div className="flex justify-between rounded-2xl bg-white p-4 shadow-lg md:p-8">
      <div className="grid grid-cols-[90px_3fr] items-center gap-4 md:grid-cols-[1fr_5.5fr] md:gap-8">
        <div className="h-full">
          <img
            src={product_image}
            className="h-full w-full rounded-xl object-cover"
            alt=""
          />
        </div>
        <div className="flex h-full flex-col justify-between gap-1 text-left text-[#09080F]">
          <p className="text-xl font-semibold md:text-2xl">{product_title}</p>
          <p className="text-sm opacity-60 md:w-max md:text-lg">
            {Specification.map((d) => {
              if (Specification[Specification.length - 1] == d) {
                return `${d}`;
              } else {
                return `${d}, `;
              }
            })}
          </p>
          <p className="text-base font-semibold opacity-80 md:text-xl">
            Price: $ {price} <span className="text-green-600">Paid</span>
          </p>
        </div>
      </div>
      <button
        onClick={handleremove}
        className="h-max rounded-full border-2 border-[#FF0000] p-1 md:p-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M15.4238 5L10.4238 10M10.4238 10L5.42383 15M10.4238 10L15.4238 15M10.4238 10L5.42383 5"
            stroke="#FF0000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
HistoryDevice.propTypes = {
  device: PropTypes.shape({
    product_title: PropTypes.string,
    product_image: PropTypes.string,
    Specification: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }),
};

export default HistoryDevice;
