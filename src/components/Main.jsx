import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRouter.jsx';
import Main from './Main.jsx';

const maptStateToProps = (store) => ({
	isAuthenticated: store.isAuthenticated,
	userName: store.userName,
	userUrl: store.url,
});

const mapDispatchToProps = (dispatch) => ({

});

class Main extends Component {

	render() {
		return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<PrivateRoute path="/home" component={Main} isAuthenticated={this.props.isAuthenticated} />
			</Switch>
		</Router>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
