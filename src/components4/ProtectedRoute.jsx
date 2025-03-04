import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('user'); // Agar foydalanuvchi login qilgan bo‘lsa, true qaytaradi
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
