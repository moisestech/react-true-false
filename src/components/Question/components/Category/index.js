import "./icon-category.css";
import PropTypes from "prop-types";

// COMPONENTS
import IconCategory from "../IconCategory";

export default function Category({ category }) {
  return (
    <div className="category">
      <IconCategory category={category} />
      <div className="category-text-wrapper">
        <div className="category-text">Category:</div>
        <div className="category-type">{category}</div>
      </div>
    </div>
  );
}

Category.propTypes = {
  text: PropTypes.string,
};
