// import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";

// When we need to dynamically pass data to components, we need props
const Body = () => {
  // Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");
  const networkStatus = useNetworkStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever a state variable gets updated, react triggers a reconciliation cycle(re-renders the entire component)

  // useEffect hook runs after the component renders
  useEffect(() => {
    try {
      if (networkStatus === true) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async (params) => {
    // let data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3248384&lng=87.3332736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5770435&lng=88.4497761&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // console.log(data);

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (networkStatus === false) {
    return (
      <h1 className="text-center">
        Looks like you are offline!!! Please check your internet connection.
      </h1>
    );
  }

  // Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <h1>
      <Shimmer />
    </h1>
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="input-box"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((resName) =>
                resName.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              // let filteredList = resList.filter(
              //   (res) => res.info.avgRating > 4.3
              // );
              // setListOfRestaurants(
              //   json.data.cards[4].card.card.gridElements.infoWithStyle
              //     .restaurants
              // );
              // console.log(listOfRestaurants);
              // console.log(
              //   json.data.cards[4].card.card.gridElements.infoWithStyle
              //     .restaurants
              // );
            }}
          >
            Top rated restaurants above 4.3
          </button>
        </div>
        <div>
          <label>UserName: </label>
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap px-20 m-10">
          {/* <RestaurantCard
          resName="Meghana foods"
          cuisine="Biryani, North Indian Asian"
        />
        <RestaurantCard resName="Dominos" cuisine="Pizzas and Pancakes" />
        <RestaurantCard
          resName="Welcome Hotel"
          cuisine="Bengali Lunch and Dinner"
        />
        <RestaurantCard resName="Step-In" cuisine="Strawberry Pan Cake" /> */}

          {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} /> */}

          {filteredRestaurants.map((restaurant) => (
            // Not using keys (not acceptable) <<<<< Index as keys <<<<< unique id (best practice)
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/** If therestaurant is promoted then add a promoted label to it */}
              {/* {console.log("Resdata....", restaurant)} */}

              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
