import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import Store from './store/configureStore';
import App from '/components/App.jsx';

const store = Store();

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);