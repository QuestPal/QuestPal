import { Router, Switch, Route } from "react-router-dom";
import React, {Component} from "react";
import { connect } from 'react-redux';
// import PrivateRoute from './PrivateRouter.jsx';
import Search from './Search.jsx';
import Result from './Result.jsx';
import Add from './Add.jsx';

class Main extends Component {

	render() {
		return (
			<Switch>
				<Route path="/home" render={props => <Search {...props} />} />
				<Route path="/add" component={Add} />
				<Route path="/result" component={Result} />
			</Switch>
		)
	}
}

export default Main;
