import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="p-4 bg-blue-600 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl">Inventory System</h1>
        <div>
          <Link to="/" className="mr-5">Home</Link>
          <Link to="/card" className="mr-5">Add card</Link>

          {user && user.role === 'admin' && <Link to="/admin" className='mr-5'>Admin</Link>}

          <Link to="/orders" className="mr-5">Order History</Link>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
