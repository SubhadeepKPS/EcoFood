//! Functional Component -
//?      It is a function that returns a piece of jsx
//!  Class-based Component -
//?      It is a class that has a render method which returns a piece of JSX

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log(this.props.name + " Child Constructor...");
  }

  componentDidMount() {
    console.log(this.props.name + " Child ComponentDidMount...");
  }

  render() {
    const { name, location, contact } = this.props;
    const { count1, count2 } = this.state;

    console.log(this.props.name + "Child Render...");

    return (
      <div className="user-card">
        <h1>Class-based Component - </h1>
        <h4>
          It is a class that has a render method which returns a piece of JSX
        </h4>
        <h1>Count 1: {count1}</h1>
        {/* {console.log(`Count1: ${count1}`)} */}
        <button
          className="px-5 py-2 font-bold bg-slate-400 rounded-md hover:bg-[#0ad13f] hover:text-slate-100"
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count = 1 + this.state.count;    wrong
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Update Count1
        </button>
        <h1>Count 2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
