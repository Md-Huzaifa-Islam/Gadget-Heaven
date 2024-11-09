import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../Context/Cardcontext";
import WishContext from "../../context/wishContext";
const ShowDetails = ({ device }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWish } = useContext(WishContext);
  const {
    product_image,
    price,
    product_title,
    availability,
    description,
    Specification,
    rating,
  } = device;

  return (
    <div className="grid grid-cols-[1fr_1.8fr] grid-rows-1 gap-8">
      <div className="">
        <img
          src={product_image}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <div className="grid gap-4 text-[#09080F]">
        <div className="grid gap-3">
          <p className="text-3xl font-semibold">{product_title}</p>
          <p className="text-xl font-semibold opacity-80">Price: $ {price}</p>
        </div>
        <div className="w-max rounded-[32px] border border-[#309C08] bg-[#309C081A] px-[14px] py-[7px] text-sm font-medium text-[#309C08]">
          <p className="">{availability ? `In Stock` : `Out Of Stock`}</p>
        </div>
        <p className="text-lg opacity-60">{description}</p>
        <div className="grid gap-3">
          <p className="text-lg font-bold">Specification:</p>
          <ol className="list-inside list-decimal">
            {Specification.map((point) => (
              <p key={point} className="list-item pb-1 text-lg opacity-60">
                {point}
              </p>
            ))}
          </ol>
        </div>
        <div className="">
          <p className="text-lg font-bold">Rating ⭐ </p>
          <div className="flex items-center gap-4">
            <div>⭐⭐⭐⭐⭐</div>
            <p className="rounded-[32px] bg-[#09080F0D] px-[14px] py-[7px] text-sm font-medium text-[#09080FCC]">
              {rating}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => addToCart(device)}
            className="btn h-auto rounded-[32px] bg-[#9538E2] p-2 px-5 text-white hover:text-[#9538E2]"
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
          <button
            onClick={addToWish(device)}
            className="btn rounded-full border border-[#09080F] border-opacity-40 p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g clipPath="url(#clip0_13_2385)">
                <path
                  d="M19.8094 12.572L12.3094 20L4.80938 12.572C4.31469 12.0906 3.92503 11.512 3.66493 10.8726C3.40484 10.2333 3.27994 9.54694 3.29812 8.85693C3.3163 8.16691 3.47715 7.48813 3.77054 6.86333C4.06394 6.23853 4.48352 5.68125 5.00287 5.22657C5.52222 4.7719 6.13009 4.42968 6.78819 4.22147C7.4463 4.01327 8.14039 3.94358 8.82675 4.0168C9.51311 4.09001 10.1769 4.30455 10.7763 4.6469C11.3756 4.98925 11.8976 5.45199 12.3094 6.00599C12.7229 5.45602 13.2455 4.99731 13.8445 4.6586C14.4434 4.31988 15.1059 4.10844 15.7903 4.03751C16.4748 3.96658 17.1665 4.03769 17.8222 4.24639C18.4778 4.45508 19.0834 4.79687 19.6009 5.25036C20.1185 5.70385 20.5368 6.25928 20.8298 6.88189C21.1228 7.50449 21.2841 8.18088 21.3037 8.8687C21.3233 9.55653 21.2006 10.241 20.9435 10.8792C20.6864 11.5175 20.3003 12.0958 19.8094 12.578"
                  stroke="#3A3A3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2385">
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
    </div>
  );
};
ShowDetails.propTypes = {
  device: PropTypes.object,
};
export default ShowDetails;
