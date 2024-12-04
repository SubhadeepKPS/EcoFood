import veg from "./../../assets/veg.png";
import non_veg from "./../../assets/non_veg.png";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxSlice/cartSlice";

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // item.quantity = 0;
    // Dispatch an action
    // item.quantity = 1;
    console.log(item, 200);
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between p-2 mx-2 mt-2 px-4 pb-14 border-b-2"
        >
          <div className="w-2/4">
            <span>
              {item.card.info.isVeg ? (
                <span>
                  <img className="w-6 h-auto" src={veg} />
                </span>
              ) : (
                <span>
                  <img className="w-6 h-auto" src={non_veg} />
                </span>
              )}
            </span>
            <p className="text-xl font-bold">{item.card.info.name}</p>
            <p className="font-bold">
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p>{item.card.info.description}</p>
          </div>
          <div className="grid justify-self-center">
            <img
              className="w-40 h-32 shadow-lg shadow-slate-600 rounded-2xl"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
            />
            <button
              className="flex justify-center px-2 py-1 absolute mt-28 mx-10 w-20 h-10 bg-slate-100 rounded-lg border-slate-500 border-2 hover:bg-green-500 hover:text-slate-50 hover:font-bold hover:border-slate-50 hover:shadow-lg hover:shadow-slate-600"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
