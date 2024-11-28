import logo from "../../assets/food-order.svg";
import cart from "../../assets/shopping-cart.svg";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // console.log("Header Rendered");

  const data = useContext(UserContext);
  // console.log(data);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  // If there is no dependency array => useEffect is called in every render
  // If the dependency array is empty = [] => useEffect is called on initial render
  // If there is something in dependency array = [userStateBtn] => useEffect is called everytime the userStateBtn gets updated
  useEffect(() => {
    console.log("useEffect Called!!!");
  });

  const networkStatus = useNetworkStatus();

  return (
    <div className="flex fixed w-screen bg-white shadow-slate-300 z-30">
      <div className="w-32 mt-8">
        <img className="w-32" src={logo} />
      </div>
      <div className="w-full">
        <div className="mx-80 mt-8 rounded-3xl h-20 mb-9 bg-amber-100 shadow-xl">
          <ul className="flex justify-between items-center mx-20 pt-2">
            <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
              <Link to="/" className="text-sm">
                Home
              </Link>
            </button>
            <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
              <Link to="/about" className="text-sm">
                About
              </Link>
            </button>
            <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
              <Link to="/contact" className="text-sm">
                Contact
              </Link>
            </button>
            <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
              <Link className="flex" to="/cart">
                <img className="w-6 h-6 hover:fill-[#0ad13f]" src={cart} />
                <h1 className="px-2">- {cartItems.length}</h1>
              </Link>
            </button>
            <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
              <Link to="/loginPage" className="text-sm">
                Login
              </Link>
            </button>
            <li
              className={`mt-2.5 ml-6 h-5 w-5 rounded-xl border-white border-double border-4 ${useNetworkStatus() ? "bg-lime-500 " : "bg-red-600"}`}
            ></li>
            {/* <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
            <Link to="/tailwind">Tailwind</Link>
          </li> */}
            {/* <li className="px-5 py-2 font-bold rounded-md">
            {data.loggedInUser}
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
