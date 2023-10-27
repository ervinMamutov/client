import { useEffect, useState } from 'react';
import axios from 'axios';

import './ProductsBox.css';
import PropTypes from 'prop-types';
import Loader from './Loader';
import Product from './Product';

const ProductsBox = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState('true');
  const [error, setError] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000');
        if (res.status !== 200) {
          throw new Error(
            `Failed to fetch product with status : ${res.status} `
          );
        } else {
          setProducts(res.data.products);
          console.log(products);
        }
      } catch (err) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="products-box">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {products.length > 0 ? (
        products.map((product, index) => (
          <Product key={index} product={product} />
        ))
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
};

ProductsBox.propTypes = {};

export default ProductsBox;
