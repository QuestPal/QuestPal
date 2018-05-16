import React, {Component} from "react";
import Main from './Main.jsx';
import Header from './Header.jsx';

class App extends Component {

	render() {
		return (
			<div className="mainContainer">
			<h1> I'm Joseph </h1>
				<Header />
				<Main />
			</div>
		)
	}
}


export default App;
