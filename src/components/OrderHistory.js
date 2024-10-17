import React from 'react';

const OrderHistory = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    return (
        <div className="bg-gray-50 ">
            <div className="container mx-auto p-6 bg-gray-50">
                <h2 className="text-2xl font-semibold mb-4">Order History</h2>
                {orders.length === 0 ? (
                    <p className="text-gray-500">No history for orders</p>
                ) : (
                    <ul className="space-y-4">
                        {orders.map((order, index) => (
                            <li key={index} className="border rounded-lg p-4 bg-white hover:bg-gray-100 transition duration-200">
                                <div className="flex justify-between">
                                    <h3 className="font-medium text-lg">Order Date: <span className="font-normal">{order.date}</span></h3>
                                    <span className={`font-bold ₹{order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-gray-700">Total: <span className="font-bold">₹{order.total.toFixed(2)}</span></p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
