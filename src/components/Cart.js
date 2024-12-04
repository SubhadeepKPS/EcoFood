import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import veg from "../../assets/veg.png";
import nonVeg from "../../assets/non_veg.png";
import { addItem, clearCart, removeItem } from "../utils/reduxSlice/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [gst, setGst] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const cartTotal = useSelector((store) => store.cart.cartTotal);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log("cartitems", cartItems);

  let uniqueCartItems = [];
  cartItems.map((item) => {
    if (!uniqueCartItems.includes(item)) {
      uniqueCartItems.push(item);
    }
  });

  console.log("Fillll", uniqueCartItems);

  // const result = removeDuplicatesAndCount(cartItems);
  // const duplicateFreeCartItems = result.uniqueArray;
  // const objectCount = result.counts;

  // for (let p = 0; p < duplicateFreeCartItems.length; p++) {
  //   duplicateFreeCartItems[p].card.info.count = count;
  // }
  // console.log(duplicateFreeCartItems);

  useEffect(() => {
    const gst = (4 / 100) * (cartTotal / 100);
    setGst(gst.toFixed(1));
    setTotalBill(cartTotal + 20 + 5 + 2 + gst + 2);
  }, [cartItems]);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handlePaymentButton = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
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
          {uniqueCartItems.map((item) =>
            !item.quantity ? null : (
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
                  <p className="font-bold">
                    ₹{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="grid justify-self-center relative">
                  <img
                    className="w-40 h-32 shadow-lg shadow-slate-600 rounded-2xl"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                  />
                  <div className="flex justify-centre absolute top-28 right-6 left-6">
                    <div
                      className="px-3 pt-1 pb-2 border-l-2 border-t-2 border-b-2 rounded-l-lg bg-slate-100 hover:bg-green-500 hover:text-slate-50 hover:font-extrabold hover:border-slate-50 hover:shadow-lg hover:cursor-pointer"
                      onClick={() => handleRemoveItem(item)}
                    >
                      -
                    </div>
                    <div className="bg-slate-100 px-3 pt-1 pb-2 border-t-2 border-b-2">
                      {item.quantity}
                    </div>
                    <div
                      className="px-3 pt-1 pb-2 border-t-2 border-r-2 border-b-2 rounded-r-lg bg-slate-100 hover:bg-green-500 hover:text-slate-50 hover:font-extrabold hover:border-slate-50 hover:shadow-lg hover:cursor-pointer"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="w-4/12">
          <div className="">
            <h4 className="font-bold text-lg">Bill Details</h4>
            <h5>Item Total - ₹{cartTotal ? cartTotal / 100 : 0}</h5>
            <h5>Delivery Fee - ₹15</h5>
            <h5 className="border-b-2 border-slate-200">
              Extra Discount for you
            </h5>
            <h5>Delivery Tip - ₹5</h5>
            <h5>Platform fee - ₹2</h5>
            <h5>GST and Restaurant Charges(₹2) - ₹{gst + 2}</h5>
            <button
              onClick={() => handlePaymentButton()}
              className="h-20 w-32 bg-amber-500"
            >
              Add Address
              {/* <Link to="/payment">Add Address</Link> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
