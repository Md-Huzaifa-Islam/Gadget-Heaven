import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ names }) => {
  const { name, id } = names;
  return (
    <>
      <NavLink
        to={id === 0 ? "/" : `${name.toLowerCase()}`}
        className={({ isActive }) => (isActive ? "active" : "")}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#9538E2" : "#09080F0D",
            color: isActive ? "white" : "#09080F99",
            fontWeight: isActive ? "700" : "500",
            padding: isActive ? "12px 20px" : "12px 20px",
            borderRadius: isActive ? "32px" : "32px",
          };
        }}
      >
        {name}
      </NavLink>
    </>
  );
};

Category.propTypes = {
  names: PropTypes.object,
};

export default Category;
