import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer',
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password) {
            signup(formData);
            navigate('/login');
        } else {
            setError('All fields are required.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow rounded-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div className="space-y-2">
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-gray-600">Role</label>
                        <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-500">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
