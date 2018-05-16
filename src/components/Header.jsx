import React from "react";
import { Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Router>
				<Link to="/home"><div className="Title"><h1>QuestPal</h1></div></Link>
				<Link to="/add"><div className="add">Add Questions</div></Link>
				<Link to="/profile">
					<div>
						<img className="userPic" src={props.url} />
						{props.userName}
					</div>
				</Link>
      </Router>
    </div>
  );
};
