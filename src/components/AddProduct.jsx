import { useState, useEffect } from 'react';
import './AddProduct.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [addData, setAddData] = useState([]);

  useEffect(() => {
    const addProduct = async () => {
      const res = await axios.post(
        'http://localhost:3000/add-product',
        addData
      );
    };
    addProduct();
  }, [addData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && name && img && price) {
      setAddData({ category, name, img, price });
    } else {
      setError('Please, fill all product field');
    }
  };

  const handelCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
  };
  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleImg = (e) => {
    const value = e.target.value;
    setImg(value);
  };
  const handlePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  return (
    <div className="add-product">
      <p>{error}</p>
      <form onSubmit={(e) => handleSubmit(e)} className="add-product-form">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(e) => handelCategory(e)}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => handleName(e)}
        />

        <label htmlFor="img">Image:</label>
        <input
          type="url"
          name="img"
          id="img"
          value={img}
          onChange={(e) => handleImg(e)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => handlePrice(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
