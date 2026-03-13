import './ProductCard.css';

function ProductCard({ product }) {
  const { name, price, category, image } = product;

  const handleAddToCart = () => {
    console.log('Added to cart:', name);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-card__image"
        />
      </div>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__category">{category}</p>
      <p className="product-card__price">{price}</p>
      <button
        type="button"
        className="product-card__button"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </article>
  );
}

export default ProductCard;
