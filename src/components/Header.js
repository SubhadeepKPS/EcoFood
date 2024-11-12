import logo from "../../assets/food-order.svg";
import cart from "../../assets/shopping-cart.svg";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [userStateBtn, setUserStateBtn] = useState("Log In");
  console.log("Header Rendered");

  const data = useContext(UserContext);
  console.log(data);

  // If there is no dependency array => useEffect is called in every render
  // If the dependency array is empty = [] => useEffect is called on initial render
  // If there is something in dependency array = [userStateBtn] => useEffect is called everytime the userStateBtn gets updated
  useEffect(() => {
    console.log("useEffect Called!!!");
  }, [userStateBtn]);

  const networkStatus = useNetworkStatus();

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center mb-9 bg-[#bbfacc] shadow-xl">
      <div className="flex ">
        <img className="w-40" src={logo} />
      </div>
      <div className="nav-items">
        <ul className="flex m-12">
          <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="flex px-5 py-2 rounded-md hover:bg-[#0ad13f]">
            <Link className="flex" to="/cart">
              <img className="w-6 h-6 hover:fill-[#0ad13f]" src={cart} />
              <h1 className="px-2">- {cartItems.length}</h1>
            </Link>
          </li>
          <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100 hover: cursor-pointer">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
            <button
              className="login-btn"
              onClick={() => {
                userStateBtn === "Log In"
                  ? setUserStateBtn("Log Out")
                  : setUserStateBtn("Log In");
              }}
            >
              {userStateBtn}
            </button>
          </li>
          <li
            className={`mt-2.5 ml-6 h-5 w-5 rounded-xl border-white border-double border-4 ${useNetworkStatus() ? "bg-lime-500 " : "bg-red-600"}`}
          ></li>
          <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
            <Link to="/tailwind">Tailwind</Link>
          </li>
          <li className="px-5 py-2 font-bold rounded-md">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
