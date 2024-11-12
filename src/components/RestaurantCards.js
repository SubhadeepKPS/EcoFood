import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log("Resdata  ", resData);

  const { name, areaName, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;

  const data = useContext(UserContext);
  //   console.log(resData.info.name);

  return (
    <div className="m-5 p-5 w-52 h-auto rounded-lg bg-[#d6ffe1] hover:bg-[#0ad13f] hover:text-slate-100">
      <img
        className="w-44 h-48 rounded-lg"
        alt="pan-cake"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
      />
      {/* <h3>{resData.info.name}</h3>
      <h4>{resData.info.areaName}</h4>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4> */}
      <div className="">
        <h3 className="font-extrabold py-3">{name}</h3>
        <h4>{areaName}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{data.loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute px-2 py-1 text-xs bg-slate-500 font-medium text-slate-50 rounded-md">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
