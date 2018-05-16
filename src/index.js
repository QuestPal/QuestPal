import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Store from './store/configureStore';
import App from './components/App.jsx';

// const store = Store();

render(
		<Router>
			<Route path="/" component={App} />
		</Router>,
	document.getElementById('app')
);