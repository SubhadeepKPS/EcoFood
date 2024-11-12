import { useState } from "react";

const User = (props) => {
  const [count1] = useState(0);
  const [count2] = useState(0);

  const { name, location, contact } = props;

  return (
    <div className="m-10 p-5 bg-[#fff67a] rounded-xl">
      <div className="flex justify-between p-2 rounded-lg bg-slate-100 hover:bg-[#242424] hover:text-slate-50">
        <h1 className="m-2 p-4 text-2xl font-bold">Functional Component</h1>
        <h4 className="m-2 p-4 text-lg">
          It is a function that returns a piece of jsx
        </h4>
      </div>

      <div className="flex flex-col  justify-between m-5 p-2 bg-slate-100 rounded-xl hover:bg-[#242424] hover:text-slate-50">
        <h1>Count 1: {count1}</h1>
        <h1>Count 2: {count2}</h1>
        <h2 className="p-2">Name: {name}</h2>
        <h3 className="p-2">Location: {location}</h3>
        <h3 className="p-2">Contact: {contact}</h3>
      </div>
    </div>
  );
};

export default User;
