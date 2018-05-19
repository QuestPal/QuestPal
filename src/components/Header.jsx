import React from "react";
import { Route, NavLink } from "react-router-dom";

const Header = props => {
	let active = {
		color:'turquoise',
		textDecoration: 'underline'
	}
	
  return (
    <div id='header' >
				<img className="logo" src="https://image.ibb.co/gxzAoy/logo.png" alt="https://goo.gl/e1QdVk"/>
				<div id='link_container' >
					<NavLink style={{marginRight: '10px'}} id='homeLink' to="/home" activeStyle={active}>Home</NavLink>
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