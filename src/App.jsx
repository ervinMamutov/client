import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsBox from './components/ProductsBox';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Header title="Full Store" />
      <Navbar />
      <Register />
      <Login />
      <ProductsBox />
    </div>
  );
};

export default App;
