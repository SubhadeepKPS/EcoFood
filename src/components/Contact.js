const Contact = () => {
  return (
    <div className="flex flex-col justify-center w-1/2">
      <div className="mx-28 mb-8">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <div className="flex flex-col justify-between h-72 w-96 mx-28">
        <div className="">
          <input
            placeholder="Name"
            type="text"
            className="bg-slate-100 px-8 h-12 w-96 rounded-xl border-2 border-lime-400 hover:shadow-sm hover:shadow-lime-400 focus:border-2 focus:border-lime-400 focus:shadow-lg focus:shadow-lime-400"
          ></input>
        </div>
        <div>
          <input
            placeholder="+91 1234567890"
            minLength="10"
            maxLength="10"
            type="number"
            className="bg-slate-200 h-12 w-96 rounded-xl"
          ></input>
        </div>
        <div>
          <input
            placeholder="Email"
            type="text"
            className="bg-slate-200 h-12 w-96 rounded-xl"
          ></input>
        </div>
      </div>
      <div className="ml-96 mt-8">
        <button className="bg-lime-400 px-4 py-2 rounded-lg">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
