import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsBox from './components/ProductsBox';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';

const App = () => {
  return (
    <div>
      <Header title="Full Store" />
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsBox />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="register" element={<Register />} />
        <Route path="log-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
