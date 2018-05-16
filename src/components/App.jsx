import React, {Component} from "react";
import Main from './Main.jsx';
import Header from './Header.jsx';

class App extends Component {

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
