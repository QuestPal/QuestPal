import { Switch, Route, withRouter } from "react-router-dom";
import React, {Component} from "react";
import { connect } from 'react-redux';
import Search from './Search.jsx';
import Result from './Result.jsx';
import Add from './Add.jsx';
import * as actions from '../action/items';

const mapStateToProps = store => ({
	companyNames: store.companyNames
})

const mapDispatchToProps = dispatch => ({
	getNames: (json) => dispatch(actions.getCompanyNames(json)),
})

class Main extends Component {

	render() {
		return (
			<Switch>
				<Route path="/home" render={routeProps => (<Search {...routeProps}  names={this.props.companyNames}/>)} />
				<Route path="/add" component={Add} />
				<Route path="/result" component={Result} />
			</Switch>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
