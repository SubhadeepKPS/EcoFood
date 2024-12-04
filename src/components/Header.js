// import logo from "../../assets/food-order.svg";
// import cart from "../../assets/shopping-cart.svg";
// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import useNetworkStatus from "../utils/useNetworkStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   // console.log("Header Rendered");

//   const data = useContext(UserContext);
//   // console.log(data);

//   // Subscribing to the store using a Selector
//   const cartItems = useSelector((store) => store.cart.items);
//   // console.log(cartItems);

//   // If there is no dependency array => useEffect is called in every render
//   // If the dependency array is empty = [] => useEffect is called on initial render
//   // If there is something in dependency array = [userStateBtn] => useEffect is called everytime the userStateBtn gets updated
//   useEffect(() => {
//     console.log("useEffect Called!!!");
//   });

//   const networkStatus = useNetworkStatus();

//   return (
//     <div className="flex fixed w-screen bg-white shadow-slate-300 z-30">
//       <div className="w-32 mt-8">
//         <img className="w-32" src={logo} />
//       </div>
//       <div className="w-full">
//         <div className="mx-80 mt-8 rounded-3xl h-20 mb-9 bg-amber-100 shadow-xl">
//           <ul className="flex justify-between items-center mx-20 pt-2">
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/" className="text-sm">
//                 Home
//               </Link>
//             </button>
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/about" className="text-sm">
//                 About
//               </Link>
//             </button>
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/contact" className="text-sm">
//                 Contact
//               </Link>
//             </button>
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link className="flex" to="/cart">
//                 <img className="w-6 h-6 hover:fill-[#0ad13f]" src={cart} />
//                 <h1 className="px-2">- {cartItems.length}</h1>
//               </Link>
//             </button>
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/loginPage" className="text-sm">
//                 Login
//               </Link>
//             </button>
//             <li
//               className={`mt-2.5 ml-6 h-5 w-5 rounded-xl border-white border-double border-4 ${useNetworkStatus() ? "bg-lime-500 " : "bg-red-600"}`}
//             ></li>
//             {/* <li className="px-5 py-2 font-bold rounded-md hover:bg-[#0ad13f] hover:text-slate-100">
//             <Link to="/tailwind">Tailwind</Link>
//           </li> */}
//             {/* <li className="px-5 py-2 font-bold rounded-md">
//             {data.loggedInUser}
//           </li> */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import logo from "../../assets/food-order.svg";
// import cart from "../../assets/shopping-cart.svg";
// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import useNetworkStatus from "../utils/useNetworkStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const data = useContext(UserContext);
//   const cartItems = useSelector((store) => store.cart.items);

//   useEffect(() => {
//     console.log("useEffect Called!!!");
//   });

//   const networkStatus = useNetworkStatus();

//   return (
//     <div className="flex fixed w-full bg-white shadow-slate-300 z-30">
//       {/* Logo */}
//       <div className="w-32 mt-8 sm:w-28 md:w-32">
//         <img className="w-32" src={logo} />
//       </div>

//       {/* Navigation */}
//       <div className="w-full">
//         <div className="mx-10 sm:mx-16 md:mx-24 lg:mx-80 mt-8 rounded-3xl h-20 mb-9 bg-amber-100 shadow-xl">
//           <ul className="flex justify-between items-center mx-4 sm:mx-10 md:mx-20 pt-2">
//             {/* Home Button */}
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/" className="text-sm">
//                 Home
//               </Link>
//             </button>

//             {/* About Button */}
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/about" className="text-sm">
//                 About
//               </Link>
//             </button>

//             {/* Contact Button */}
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/contact" className="text-sm">
//                 Contact
//               </Link>
//             </button>

//             {/* Cart Button */}
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link className="flex" to="/cart">
//                 <img className="w-6 h-6 hover:fill-[#0ad13f]" src={cart} />
//                 <h1 className="px-2">- {cartItems.length}</h1>
//               </Link>
//             </button>

//             {/* Login Button */}
//             <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
//               <Link to="/loginPage" className="text-sm">
//                 Login
//               </Link>
//             </button>

//             {/* Network Status */}
//             <li
//               className={`mt-2.5 ml-6 h-5 w-5 rounded-xl border-white border-double border-4 ${networkStatus ? "bg-lime-500 " : "bg-red-600"}`}
//             ></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import logo from "../../assets/food-order.svg";
import cart from "../../assets/shopping-cart.svg";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/reduxSlice/userSlice";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const data = useContext(UserContext);
  const networkStatus = useNetworkStatus();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const cartQuantity = useSelector((store) => store.cart.itemCount);

  const handleSignInOut = async (auth) => {
    if (user) {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Sign Out Successfull");
          dispatch(removeUser());
        })
        .catch((error) => {
          // An error happened.
        });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log("useEffect Called!!!");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(addUser(user));
        // navigate("/");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        // navigate("/loginPage");
      }
    });
  }, []);

  return (
    <div className="flex fixed w-full bg-white shadow-slate-300 z-30">
      {/* Logo */}
      <div className="w-32 sm:w-28 md:w-32 mt-8 flex-shrink-0">
        <img className="w-full" src={logo} alt="Logo" />
      </div>

      {/* Navigation Container */}
      <div className="flex-1">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-8 rounded-3xl h-20 mb-9 bg-amber-100 shadow-xl">
          <ul className="flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-10 pt-2 space-x-4 sm:space-x-6 lg:space-x-8">
            {/* Home Button */}
            <li>
              <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
                <Link to="/" className="text-sm">
                  Home
                </Link>
              </button>
            </li>

            {/* About Button */}
            <li>
              <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
                <Link to="/about" className="text-sm">
                  About
                </Link>
              </button>
            </li>

            {/* Contact Button */}
            <li>
              <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
                <Link to="/contact" className="text-sm">
                  Contact
                </Link>
              </button>
            </li>

            {/* Cart Button */}
            <li>
              <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
                <Link className="flex items-center" to="/cart">
                  <img className="w-6 h-6 hover:fill-[#0ad13f]" src={cart} />
                  <h1 className="px-2 text-sm sm:text-base">{cartQuantity}</h1>
                </Link>
              </button>
            </li>

            {/* Login Button */}
            <li>
              <button className="font-bold h-16 hover:scale-125 hover:border-b-2 hover:border-amber-500">
                <Link to="/loginPage" className="text-sm">
                  Login
                </Link>
              </button>
            </li>

            {/* Network Status Indicator */}
            <li>
              <div
                className={`mt-2.5 h-5 w-5 rounded-xl border-white border-double border-4 ${
                  networkStatus ? "bg-lime-500" : "bg-red-600"
                }`}
              ></div>
            </li>
            <li>
              <button
                onClick={() => handleSignInOut(auth)}
                className="font-bold h-16 text-sm hover:scale-125 hover:border-b-2 hover:border-amber-500"
              >
                {user ? "Log Out" : "Log In"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
