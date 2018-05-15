import React from "react";
import { connect } from 'react-redux';
import Main from './Main.jsx';
import Header from './Header.jsx';

const maptStateToProps = (store) => ({
	userName: store.userName,
	userUrl: store.url,
});

class App extends Component {

	render() {
		return (
			<div className="mainContainer">
				<Header userName={this.props.userName} url={this.props.userUrl} />
				<Main />
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
