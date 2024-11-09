import { useContext } from "react";
import PropTypes from "prop-types";
import WishContext from "../../context/wishContext";
import CartContext from "../../Context/Cardcontext";

const WishDevice = ({ device }) => {
  const { removeFromWish } = useContext(WishContext);
  const { addToCart } = useContext(CartContext);
  const handleremove = () => {
    removeFromWish(device);
  };
  const { product_title, product_image, Specification, price } = device;
  return (
    <div className="flex justify-between rounded-2xl bg-white p-8 shadow-lg">
      <div className="grid grid-cols-[1fr_4fr] items-center gap-8">
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
          <button
            onClick={() => {
              addToCart(device);
              removeFromWish(device);
            }}
            className="btn h-auto w-max rounded-[32px] bg-[#9538E2] p-2 px-5 text-white hover:text-[#9538E2]"
          >
            <p>Add To Card</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clipPath="url(#clip0_13_2378)">
                <path
                  d="M4.30957 19C4.30957 19.5304 4.52028 20.0391 4.89536 20.4142C5.27043 20.7893 5.77914 21 6.30957 21C6.84 21 7.34871 20.7893 7.72378 20.4142C8.09886 20.0391 8.30957 19.5304 8.30957 19C8.30957 18.4696 8.09886 17.9609 7.72378 17.5858C7.34871 17.2107 6.84 17 6.30957 17C5.77914 17 5.27043 17.2107 4.89536 17.5858C4.52028 17.9609 4.30957 18.4696 4.30957 19Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3096 19C15.3096 19.5304 15.5203 20.0391 15.8954 20.4142C16.2704 20.7893 16.7791 21 17.3096 21C17.84 21 18.3487 20.7893 18.7238 20.4142C19.0989 20.0391 19.3096 19.5304 19.3096 19C19.3096 18.4696 19.0989 17.9609 18.7238 17.5858C18.3487 17.2107 17.84 17 17.3096 17C16.7791 17 16.2704 17.2107 15.8954 17.5858C15.5203 17.9609 15.3096 18.4696 15.3096 19Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3096 17H6.30957V3H4.30957"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.30957 5L20.3096 6L19.3096 13H6.30957"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2378">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.30957)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <button
        onClick={handleremove}
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

WishDevice.propTypes = {
  device: PropTypes.shape({
    product_title: PropTypes.string,
    product_image: PropTypes.string,
    Specification: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }),
};

export default WishDevice;
