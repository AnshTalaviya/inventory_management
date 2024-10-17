import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const dummyProducts = [
        { id: 1, name: 'Product 1', price: 100, stock: 10 },
        { id: 2, name: 'Product 2', price: 200, stock: 5 },
        { id: 3, name: 'Product 3', price: 150, stock: 8 },
        { id: 4, name: 'Product 4', price: 300, stock: 3 },
        { id: 5, name: 'Product 5', price: 50, stock: 20 },
    ];

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (!storedProducts || storedProducts.length === 0) {
            localStorage.setItem('products', JSON.stringify(dummyProducts));
            setProducts(dummyProducts);
        } else {
            setProducts(storedProducts);
        }
    }, []);

    const addToCart = (product) => {
        setCart((prev) => {
            const updatedCart = [...prev, product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const addProduct = (newProduct) => {
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const deleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <ProductContext.Provider value={{ products, setProducts, cart, addToCart, removeFromCart, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
