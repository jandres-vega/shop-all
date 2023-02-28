import React from "react";
import "../styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logos/Logo-shopping.svg";
import { AppContext } from "../context/AppContext";
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getAllCategories } from "../redux/actions/actions";

function Header() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  const [toggle, setToggle] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);
  const { state, getDataProducts, setName } =
    React.useContext(AppContext);

  const handleToggle = () => setToggle(!toggle);

  const handleCategory = (category) => {

    setName(category);
    dispatch(filterByCategory(categories, category));
  };
  React.useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <header>
      <div className="container-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <div className="navbar-left">
          <ul>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>
                        <span
                          aria-hidden="true"
                          onClick={() => getDataProducts()}
                        >
                           All
                        </span>
              </li>
            </Link>
            {categories.map((category) => (
              <li
                key={category.name_category}
                className={`${
                  !category.name_category ? "active" : null
                }`}
              >
                        <span
                          aria-hidden="true"
                          onClick={() => handleCategory(category.name_category)}
                        >
                           {category.name_category}
                        </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="navbar-right">
        <div className="container-shop">
          <ul>
            <li
              className="navbar-email"
              aria-hidden="true"
              onClick={handleToggle}
            >
              shopAll@example.com
            </li>
            <li
              className="navbar-shopping-cart"
              aria-hidden="true"
              onClick={() => setToggleOrders(!toggleOrders)}
            >
              <FontAwesomeIcon
                className="icon-cart"
                icon={faCartShopping}
              />
              <div>{state.cart.length > 0 ? state.cart.length : 0}</div>
            </li>
          </ul>
          <FontAwesomeIcon className="menu" icon={faBars} />
        </div>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </header>
  );
}

export default Header;
