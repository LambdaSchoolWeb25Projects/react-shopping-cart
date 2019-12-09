// import useContext hook and ProductContext
import React, {useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

// remove all instances of props and
// refactor to const Products = () => { or function Products(){
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
