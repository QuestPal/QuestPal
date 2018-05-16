import React from "react";
import { Route, NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
				<NavLink to="/home">QuestPal</NavLink>
				<NavLink to="/add">Add Questions</NavLink>
				{/* <Link to="/profile">
					<div>
						<img className="userPic" src={props.url} />
						{props.userName}
					</div>
				</Link> */}
    </div>
  );
};

export default Header;