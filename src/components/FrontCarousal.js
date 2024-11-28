import React from "react";

const FrontCarousal = ({ info }) => {
  // console.log(info, 9999);

  return (
    <div className="">
      <div>
        <h3></h3>
      </div>
      <div className="flex w-8/12 mx-24 border-y-4 border-slate-200 overflow-scroll overflow-x-hidden">
        {info.map((card) => (
          <CarousalCards info={card} />
        ))}
        {info.map((card) => {
          // console.log(card);
        })}
        {/* <CarousalCards info={info[0]} /> */}
      </div>
    </div>
  );
};

const CarousalCards = (card) => {
  // console.log(card, 800);
  return (
    <div>
      <div className="mx-6 w-36 hover:scale-110">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${card?.info?.imageId}`}
        />
      </div>
    </div>
  );
};

export default FrontCarousal;
