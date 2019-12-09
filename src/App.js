// complete addItem functionality
// wrap child components and routes in `ProductContext.Provider` component
// pass a value prop to your `Provider`
// in the value prop pass in products state, addItem function to add books to cart
// refactor products route to no longer use render props

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<div className="App">
				<CartContext.Provider value={{cart}}>
					<Navigation cart={cart} />
				</CartContext.Provider>

				{/* Routes */}
				<Route
					exact
					path="/"
							component={Products}
				/>
				<CartContext.Provider value={{cart}}>
					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</CartContext.Provider>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
