import { Link } from "react-router-dom";

function Product({ product }) {
  const handleBuy = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product">
      <Link to={`/product/${product.id}`} className="product__link">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product__image"
        />
        <div className="product__info">
          <h2 className="product__title">{product.title}</h2>
          <span className="product__price">${product.price}</span>
          <p className="product__rating">⭐ {product.rating}</p>
        </div>
      </Link>
      <div className="product__action">
        <button onClick={handleBuy} className="product__buy-btn">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
