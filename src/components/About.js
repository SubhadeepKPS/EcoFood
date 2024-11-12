import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor...");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount...");
  }

  render() {
    console.log("Parent Render...");

    return (
      <div>
        <h1 className="flex justify-center text-4xl font-bold">About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <div className="flex justify-evenly">
          <UserClass
            name="Subhadeep kumar Parai"
            location="Kolkata"
            contact="@skp2002"
          />
          <UserClass
            name="Elon Musk"
            location="US"
            contact="@muskelon"
          ></UserClass>
        </div>
      </div>
    );
  }
}

export default About;
