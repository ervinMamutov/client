import './Product.css';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <div className="product-box">
      <h2>{product.category}</h2>
      <h1>{product.name}</h1>
      <img className="product-img" src={product.img} alt={product.name} />
      <h3>$ {product.price}</h3>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default Product;
