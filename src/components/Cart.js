import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      date: new Date().toLocaleString(),
      status: 'Pending',
      total: totalAmount,
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
          <p className="text-gray-500">Your cart is empty</p>
          <Link to="/" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow">
            {cart.map((item) => (
              <div key={item.id} className="flex border justify-between items-center p-4 hover:bg-gray-50 transition duration-150">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ₹ {item.price.toFixed(2)} /-</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">Total Amount:</h3>
            <p className="text-lg font-bold">₹{totalAmount.toFixed(2)}</p>
          </div>
          <button
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
