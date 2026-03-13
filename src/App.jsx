import ProductCard from './components/productCard/ProductCard.jsx';
import './App.css';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "₹2499",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

function App() {
  return (
    <div className="app">
      <h1 className="app__heading">Our Products</h1>
      <div className="app__container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
