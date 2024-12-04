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
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import LoginPage from "./components/LoginPage";
import useGeolocation from "./utils/useGeolocation";
import GeolocationContext from "./utils/GeolocationContext";
import AddressCumPayment from "./components/AddressCumPayment";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  // console.log(<Body />);
  const [userName, setUserName] = useState();
  const location = useGeolocation();

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      username: "Subhadeep kumar Parai",
    };
    setUserName(data.username);
  }, [location]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <GeolocationContext.Provider value={{ location: location }}>
          <div className="app">
            <div className="h-32">
              <Header />
            </div>
            <div className="mt-12">
              <Outlet />
            </div>
          </div>
        </GeolocationContext.Provider>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<Shimmer />}>
        <LoginPage />
      </Suspense>
    ),
  },
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
        path: "/payment",
        element: (
          <Suspense fallback={<Shimmer />}>
            <AddressCumPayment />
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
