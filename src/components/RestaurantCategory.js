import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, index, showItems, setShowIndex }) => {
  // console.log("PROPS", props);
  const [showList, setShowList] = useState(true);

  const showAccordion = () => {
    setShowIndex();
    setShowList(!showList);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <div
          className="flex justify-between bg-[#bbfacc] w-7/12 mx-auto mt-8 shadow-xl p-4 rounded-lg hover:bg-[#0ad13f] hover:cursor-pointer hover:text-slate-50 hover:font-bold"
          onClick={showAccordion}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="w-7/12 bg-slate-100 shadow-lime-400 mx-auto mt-2 mb-10 shadow-md p-4">
          {showItems && showList ? <ItemList items={data.itemCards} /> : null}
        </div>
      </div>

      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
