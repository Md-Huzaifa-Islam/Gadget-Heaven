import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Device = ({ data }) => {
  const { product_title, product_image, price, product_id } = data;
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-5">
      <div className="h-48 w-full">
        <img
          src={product_image}
          className="h-full w-full rounded-xl object-cover"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between md:grid md:gap-4">
        <div className="grid gap-2 md:gap-4">
          <p className="text-xl font-semibold text-[#09080F] md:text-2xl">
            {product_title}
          </p>
          <p className="text-lg font-semibold text-[#09080F99] md:text-xl md:font-medium">
            Price: {price}
          </p>
        </div>
        <Link
          to={`product/${product_id}`}
          className={
            "w-max rounded-[32px] border border-primary-0 px-3 py-2 text-base font-medium text-primary-0 md:px-5 md:py-3 md:text-lg md:font-semibold"
          }
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
Device.propTypes = {
  data: PropTypes.shape({
    product_title: PropTypes.string,
    product_image: PropTypes.string,
    price: PropTypes.number,
    product_id: PropTypes.number,
  }).isRequired,
};

export default Device;
