import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRouter.jsx';
import Main from './Main.jsx';
import Entry from './Entry.jsx';
import Add from './Add.jsx';

const maptStateToProps = (store) => ({
	isAuthenticated: store.isAuthenticated,
});

class Main extends Component {

	render() {
		return (
		<Router>
			<Switch>
				<Route path="/entry" component={Entry} />
				<PrivateRoute path="/home" component={Main} isAuthenticated={this.props.isAuthenticated} />
				<PrivateRoute path="/add" component={Add} isAuthenticated={this.props.isAuthenticated} />
			</Switch>
		</Router>
		)
	}
}

export default connect(mapStateToProps, null)(App);
