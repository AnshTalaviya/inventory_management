import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import ProductProvider from './context/ProductContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import Login from './components/Login';
import OrderHistory from './components/OrderHistory';
import SignUp from './components/SignUp';
import AddCard from './pages/AddCard';
import ProtectedRoute from './context/ProtectedRoute'; 

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/card" 
              element={
                <ProtectedRoute>
                  <AddCard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/orders" 
              element={
                <ProtectedRoute>
                  <OrderHistory />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
