import React from "react";
import "../styles/CategoryItem.scss";
import { useDispatch } from "react-redux";
import { filterSubCategoryProducts } from "../redux/actions/actions";
import { AppContext } from "../context/AppContext";

// eslint-disable-next-line react/prop-types
function CategoryItem({ id, image, name, setCurrenPage }) {

  const dispatch = useDispatch();
  const { setName } = React.useContext(AppContext);

  const handleShowProducts = (id) => {
    setCurrenPage(1);
    setName("");
    dispatch(filterSubCategoryProducts(id));
  };

  return (
    <div
      className="category-item"
      aria-hidden="true"
      onClick={() => handleShowProducts(id)}
    >
      <div className="category-item-img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

export default CategoryItem;
