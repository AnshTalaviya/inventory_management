import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const AdminPanel = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({ name: '', price: "", stock: "" });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0 && newProduct.stock >= 0) {
      const productToAdd = { ...newProduct, id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1 };
      addProduct(productToAdd);
      setNewProduct({ name: '', price: "", stock: "" });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    updateProduct(true);
  };

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <div className="bg-white shadow rounded-lg p-6">

        <h3 className="text-xl mb-2">Add Product</h3>
        <div className="space-y-4">
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="Product Name"
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            placeholder="Price"
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
            placeholder="Stock"
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition duration-300" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>


        {!products.filter(p => p.stock < 5).length ? "" : (
          <>
            <h3 className="text-xl mt-4">Low Stock Products</h3>
            <div className="mt-2">
              {products.filter(p => p.stock < 5).length === 0 ? (
                <p className="text-gray-500">No low stock products</p>
              ) : (
                products.filter(p => p.stock < 5).map(product => (
                  <div key={product.id} className="flex justify-between items-center p-2 my-2 border border-gray-300 rounded">
                    <p>{product.name}</p>
                    <span className="bg-yellow-300 text-black font-semibold py-1 px-2 rounded">{product.stock} in stock</span>
                  </div>
                ))
              )}
            </div>
          </>
        )}




        <h3 className="text-xl mt-4">Product List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <h4 className="font-bold text-lg">{product.name}</h4>
              <p>Price: ₹{product.price}</p>
              <p>Stock: {product.stock}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>
    </>
  );
};

export default AdminPanel;
