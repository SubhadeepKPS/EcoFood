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
    <div className="group w-64 h-80 mx-7 my-8 rounded-2xl hover:shadow-xl hover:transition hover:scale-90 hover:ease-in-out hover:duration-500">
      <div className="w-64 h-44">
        <img
          className="w-64 h-44 rounded-t-2xl object-cover"
          alt="pan-cake"
          src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        />
      </div>
      <div className="my-2 group-hover:mx-3">
        <div className="">
          <h3
            className="font-bold
           text-base pt-2 pb-3"
          >
            {name}
          </h3>
        </div>
        <h4 className="text-sm font-medium">{areaName}</h4>
        <h4 className="font-bold">{avgRating} ⭐</h4>
        <div className="flex justify-between">
          <h4 className="text-sm font-normal text-wrap">
            {cuisines.join(", ").slice(0, 20)}...
          </h4>
          <h4 className="text-sm font-semibold">{costForTwo}</h4>
        </div>

        {/* <h4>{data.loggedInUser}</h4> */}
      </div>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="group w-64 h-80 mx-6 hover:transition hover:ease-in-out hover:duration-500">
        <label className="absolute px-2 py-1 text-xs z-10 bg-slate-500 font-medium text-slate-50 rounded-md group-hover:scale-90 group-hover:mx-4 group-hover:my-2">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
