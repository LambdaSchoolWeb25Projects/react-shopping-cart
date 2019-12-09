// import useContext hook and ProductContext
import React, {useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';

// remove all instances of props
const Navigation() {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
