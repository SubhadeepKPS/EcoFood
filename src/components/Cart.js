import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import veg from "../../assets/veg.png";
import nonVeg from "../../assets/non_veg.png";
import { clearCart } from "../utils/reduxSlice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const [itemTotal, setItemTotal] = useState(0);
  useEffect(() => {
    let itemTotalInRs = 0;
    for (let i = 0; i < cartItems.length; i++) {
      itemTotalInRs =
        itemTotalInRs + parseInt(cartItems[i].card.info.price) / 100;
    }
    setItemTotal(itemTotalInRs);
  }, []);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="flex justify-center mb-7">
        <button className="bg-red-500 p-3 rounded-lg" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-6/12 ml-6 border-r-2">
          {cartItems.map((item) => (
            <div
              key={item.card.info.id}
              className="flex justify-between p-2 mx-2 mt-2 px-4 pb-14 border-b-2 border-slate-300"
            >
              <div className="w-2/4">
                <span>
                  {item.card.info.isVeg ? (
                    <span>
                      <img className="w-6 h-auto" src={veg} />
                    </span>
                  ) : (
                    <span>
                      <img className="w-6 h-auto" src={nonVeg} />
                    </span>
                  )}
                </span>
                <p className="text-xl font-bold">{item.card.info.name}</p>
                <p className="font-bold">₹ {item.card.info.price / 100}</p>
                <p>{item.card.info.description}</p>
              </div>
              <div className="grid justify-self-center relative">
                <img
                  className="w-40 h-32 shadow-lg shadow-slate-600 rounded-2xl"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                />
                <div className="flex justify-centre absolute top-28 right-6 left-6">
                  <div className="px-3 pt-1 pb-2 border-l-2 border-t-2 border-b-2 rounded-l-lg bg-slate-100 hover:bg-green-500 hover:text-slate-50 hover:font-extrabold hover:border-slate-50 hover:shadow-lg hover:cursor-pointer">
                    -
                  </div>
                  <div className="bg-slate-100 px-3 pt-1 pb-2 border-t-2 border-b-2">
                    24
                  </div>
                  <div className="px-3 pt-1 pb-2 border-t-2 border-r-2 border-b-2 rounded-r-lg bg-slate-100 hover:bg-green-500 hover:text-slate-50 hover:font-extrabold hover:border-slate-50 hover:shadow-lg hover:cursor-pointer">
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-4/12">
          <div className="">
            <h4 className="font-bold text-lg">Bill Details</h4>
            <h5>Item Total - {itemTotal}</h5>
            <h5>Delivery Fee</h5>
            <h5 className="border-b-2 border-slate-200">
              Extra Discount for you
            </h5>
            <h5>Delivery Tip</h5>
            <h5>Platform fee</h5>
            <h5>GST and Restaurant Charges</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
