import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsBox from './components/ProductsBox';

const App = () => {
  return (
    <div>
      <Header title="Full Store" />
      <Navbar />
      <ProductsBox />
    </div>
  );
};

export default App;
