import { removeFromLocal } from "../Local Storage/localStorage";
import PropTypes from "prop-types";

const CartDevice = ({ device }) => {
  function handleRemove() {
    removeFromLocal("cart", product_id);
  }
  const { product_title, product_image, product_id, Specification, price } =
    device;
  return (
    <div className="flex justify-between rounded-2xl bg-white p-8 shadow-lg">
      <div className="grid grid-cols-[1fr_5.5fr] items-center gap-8">
        <div className="h-full">
          <img
            src={product_image}
            className="h-full w-full rounded-xl object-cover"
            alt=""
          />
        </div>
        <div className="flex h-full flex-col justify-between text-left text-[#09080F]">
          <p className="text-2xl font-semibold">{product_title}</p>
          <p className="w-max text-lg opacity-60">
            {Specification.map((d) => {
              if (Specification[Specification.length - 1] == d) {
                return `${d}`;
              } else {
                return `${d}, `;
              }
            })}
          </p>
          <p className="text-xl font-semibold opacity-80">Price: $ {price}</p>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="h-max rounded-full border-2 border-[#FF0000] p-[6px]"
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
CartDevice.propTypes = {
  device: PropTypes.shape({
    product_title: PropTypes.string,
    product_image: PropTypes.string,
    product_id: PropTypes.string,
    Specification: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }),
};

export default CartDevice;
