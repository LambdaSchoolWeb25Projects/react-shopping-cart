// import ProductContext and wrap child components inside provider and pass prop of value

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ProductContext } from '../src/contexts/ProductContext';
import './sass/index.scss';
import App from './App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
