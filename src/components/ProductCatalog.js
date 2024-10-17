import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductCatalog = () => {
  const { products, addToCart, removeFromCart, cart } = useContext(ProductContext);

  const isInCart = (productId) => cart.some(item => item.id === productId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mt-8">
      {products.map((product) => (
        <div key={product.id} className="border border-gray-200 rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-lg text-gray-600">Price: <span className="font-semibold">₹{product.price}</span></p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
          <div className="p-4 bg-gray-100 flex justify-between items-center">
            {isInCart(product.id) ? (
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
            <span className="text-sm text-gray-500">{product.stock < 5 ? 'Low Stock!' : 'In Stock'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
