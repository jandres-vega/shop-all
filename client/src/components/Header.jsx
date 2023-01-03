import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logos/Logo-shopping.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faBars} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../context/AppContext";
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";
import {useGetCategories} from "../hooks/useGetCategories";

const Header = () => {
    const categories = useGetCategories();

    const [toggle, setToggle] = React.useState(false);
    const [toggleOrders, setToggleOrders] = React.useState(false);
    const {state} = React.useContext(AppContext)


    const handleToggle = () =>  setToggle(!toggle);

    const handleCategory = (category) => {
        console.log(state.products)
    }

    return (
        <header>
            <div className="container-logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <div className="navbar-left">
                    <ul>
                        <li>
                            <a href="/">All</a>
                        </li>
                        {
                            categories.map(category => (
                                <li key={category.name_category}>
                                    <a onClick={() => handleCategory(category.name_category)}>{category.name_category}</a>
                                    {/*<NavLink*/}
                                    {/*    to="/"*/}
                                    {/*    style={({isActive}) => ({color: isActive ? 'red':'blue'})}*/}
                                    {/*    */}
                                    {/*>*/}
                                    {/*    {category.name_category}*/}
                                    {/*</NavLink>*/}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            <div className="navbar-right">
                <div className="container-shop">
                    <ul>
                        <li className="navbar-email" onClick={handleToggle}>shopAll@example.com</li>
                        <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                            <FontAwesomeIcon className="icon-cart" icon={faCartShopping} />
                            <div>{state.cart .length > 0 ? state.cart.length : 0}</div>
                        </li>
                    </ul>
                    <FontAwesomeIcon className="menu" icon={faBars}/>
                </div>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </header>
    );
};

export default Header;