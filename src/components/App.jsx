import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './Main.jsx';
import Header from './Header.jsx';
// import * as actions from '../action/items';

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
// 		getAll: actions.getAll,
// 	})
// }

class App extends Component {
	componentDidMount(){

	}

	render() {
		return (
			<div className="mainContainer">
				<Header />
				<Main />
			</div>
		)
	}
}


export default App;
