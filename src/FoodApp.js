/*
! Header
?   - Logo
?   - Nav Items
! Body
?   - Search
?   - Restaurant Container
*       - Restaurant Card
            - Img
            - Name of Restaurant
            - Star rating
            - Cuisine
            - Delivery Time
! Footer
?   - Copyright
?   - Links
?   - Address
?   - Contact
*/

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Groceries = lazy(() => import("./components/Groceries"));
const Tailwind = lazy(() => import("./components/Tailwind"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  // console.log(<Body />);

  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      username: "Subhadeep kumar Parai",
    };
    setUserName(data.username);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/tailwind",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Tailwind />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//! Two types of export/import
//? 1. Default export/import
//*       i. export default Component;
//*       ii. import Component from "path"

//? 2. Named export/import
//*       i. export const Component = () => {}
//*       ii. import {Component} from "path"

//! React Hooks (Normal js utility function)
//?    - useState() - Super powerful state variable in react
//?    - useEffect()

//! 2 types of Routing in Web Apps
//?    - Client Side Routing
//?    - Server SIde Routing
