// import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import FrontCarousal from "./FrontCarousal";
import useGeolocation from "../utils/useGeolocation";
// import Error from "./Error";

// When we need to dynamically pass data to components, we need props
const Body = () => {
  // Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(listOfRestaurants);
  const [carousalInfo, setCarousalInfo] = useState([]);

  const [searchText, setSearchText] = useState("");
  // const [location, setLocation] = useState(null);

  const networkStatus = useNetworkStatus();
  const location = useGeolocation();

  // console.log("location: ", location);
  // console.log(location.coordinates.latitude, location.coordinates.longitude);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever a state variable gets updated, react triggers a reconciliation cycle(re-renders the entire component)

  // useEffect hook runs after the component renders
  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = async () => {
    // let data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3248384&lng=87.3332736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    try {
      // https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3281152&lng=87.3332736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

      // let data = await fetch(
      //   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5770435&lng=88.4497761&carousel=true&third_party_vendor=1"
      // );

      // https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5770435&lng=88.4497761&carousel=true&third_party_vendor=1

      // let data = await fetch(
      //   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.3313928&lng=87.3376351&carousel=true&third_party_vendor=1"
      // );
      // latitude : 22.3281152
      // longitude : 87.3332736

      // ? For Newtown, Kolkata
      let data = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5770435&lng=88.4497761&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );

      // ? For KGP
      // let data = await fetch(
      //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3281152&lng=87.3332736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );

      console.log("location: ", location);
      const lat = location.coordinates.latitude;
      const lng = location.coordinates.longitude;
      console.log(`lat: ${lat}, lng: ${lng}`);

      // ? With respect to Location Coordinates
      // let data = await fetch(
      //   `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      // );
      console.log(data);
      const json = await data.json();
      console.log(json);

      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCarousalInfo(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );

      // console.log(
      //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
    } catch (err) {
      console.error("Error: ", err);
      return (
        <div>
          <h1>Data could not be fetched properly.</h1>
        </div>
      );
    }
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
  return !listOfRestaurants?.length ? (
    <h1>
      <Shimmer />
    </h1>
  ) : (
    <div className="">
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
      <div>
        <FrontCarousal info={carousalInfo} />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap px-20 m-10">
          {console.log("FilRes", filteredRestaurants)}
          {filteredRestaurants.map((restaurant) => (
            // Not using keys (not acceptable) <<<<< Index as keys <<<<< unique id (best practice)
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
          {/* <RestaurantCardPromoted resData={filteredRestaurants[7]} /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
