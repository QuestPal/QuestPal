import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import Main from './Main.jsx';
import Header from './Header.jsx';
import * as actions from '../action/items';

const mapStateToProps = (store) => ({
	store: store
})

const mapDispatchToProps = dispatch => ({
	getNames: (json) => dispatch(actions.getCompanyNames(json)),
})

class App extends Component {
	//Fetch Company Name list
	componentDidMount() {
		fetch('/getCompanyNames')
		.then(res => res.json())
		.then(json => {
			this.props.getNames(json);		
		})
	}

	render() {
		//Only render if state is defined
		if(this.props.store !== undefined){
			return (
				<div className="mainContainer">
					<Header />
					<Main />
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
