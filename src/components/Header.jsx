import React from "react";
import { Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Router>
        <h1> QuestPal </h1>
				<Link to="/home"></Link>
				<Link to="/add"></Link>
        <div>
          <img className="userPic" src={props.url} />
        </div>
      </Router>
    </div>
  );
};
