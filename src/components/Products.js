// import useContext hook and ProductContext
import React, {useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

// remove all instances of props
// replace const w/ function or 
const Products = () => {
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => {
				return (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
				)
})}
		</div>
	);
};

export default Products;
