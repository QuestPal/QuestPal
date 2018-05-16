import React from "react";
import { Route, NavLink } from "react-router-dom";

const Header = props => {
	let active = {
		color:'turquoise',
    textDecoration: 'underline'}
  return (
    <div id='header' >
				{/* <img src="https://ibb.co/je1O8y" alt="https://goo.gl/e1QdVk"/> */}
				<h1 id='logo_container'>questPal</h1>
				<div id='link_container' >
					<NavLink id='homeLink' to="/home" activeStyle={active}>Home</NavLink>
					<NavLink id='questionLink' to="/add" activeStyle={active}>Add Questions</NavLink>
				</div>
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