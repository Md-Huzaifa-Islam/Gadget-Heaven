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
      <p className="text-2xl font-semibold text-[#09080F]">{product_title}</p>
      <p className="text-xl font-medium text-[#09080F99]">Price: {price}</p>
      <Link
        to={`product/${product_id}`}
        className={
          "w-max rounded-[32px] border border-primary-0 px-5 py-3 text-lg font-semibold text-primary-0"
        }
      >
        View Details
      </Link>
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
