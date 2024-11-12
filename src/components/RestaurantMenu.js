import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log("PARAMS", resId);

  const resInfo = useRestaurantMenu(resId);

  // console.log("Shimmer ready to be rendered...");
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // console.log("RESINFO", resInfo);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu">
      <div className="text-center ">
        <h1 className="p-4 text-4xl font-bold">{name}</h1>
        <h2 className=" py-5 text-2xl font-semibold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
      </div>
      {/* <ul className="flex flex-col justify-center items-center">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="px-12 py-3 mx-4 my-3 w-3/5 bg-[#bbfacc] rounded-xl text-center hover:bg-[#0ad13f] hover:cursor-pointer hover:text-slate-50 hover:w-4/6 hover:font-bold"
          >
            {item.card.info.name} -{" ₹"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}
      {/* .....<li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> ......*/}
      {/* </ul> */}
      {/* Categories Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          index={index}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// 136990;
