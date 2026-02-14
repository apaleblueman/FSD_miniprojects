import logo from './logo.svg';
import './App.css';
import Card from './card'
const products = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/101/300/300",
    name: "Premium Noise-Cancelling Headphones",
    price: "$89.99",
    stock: "12 left"
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/102/300/300",
    name: "Smart Watch with Heart Rate Monitor",
    price: "$199.99",
    stock: "5 left"
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/103/300/300",
    name: "Wireless Bluetooth Speaker",
    price: "$49.99",
    stock: "23% up"
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/104/300/300",
    name: "Leather Laptop Backpack",
    price: "$79.99",
    stock: "8 left"
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/105/300/300",
    name: "Running Shoes – Lightweight",
    price: "$129.99",
    stock: "15% off"
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/106/300/300",
    name: "Ultra-Thin Laptop Stand",
    price: "$45.99",
    stock: "In Stock"
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/id/107/300/300",
    name: "4K Action Camera",
    price: "$299.99",
    stock: "10 left"
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/id/108/300/300",
    name: "Classic Leather Wallet",
    price: "$34.99",
    stock: "New"
  },
  {
    id: 9,
    imageUrl: "https://picsum.photos/id/109/300/300",
    name: "Stainless Steel Water Bottle",
    price: "$24.99",
    stock: "50+ available"
  },
  {
    id: 10,
    imageUrl: "https://picsum.photos/id/110/300/300",
    name: "Yoga Mat with Carrying Strap",
    price: "$39.99",
    stock: "20 left"
  },
  {
    id: 11,
    imageUrl: "https://picsum.photos/id/111/300/300",
    name: "Desk Lamp with Wireless Charger",
    price: "$59.99",
    stock: "7 left"
  },
  {
    id: 12,
    imageUrl: "https://picsum.photos/id/112/300/300",
    name: "Mechanical Keyboard – RGB",
    price: "$89.99",
    stock: "15% off"
  },
  {
    id: 13,
    imageUrl: "https://picsum.photos/id/113/300/300",
    name: "Wireless Ergonomic Mouse",
    price: "$29.99",
    stock: "In Stock"
  },
  {
    id: 14,
    imageUrl: "https://picsum.photos/id/114/300/300",
    name: "Portable Power Bank 20000mAh",
    price: "$49.99",
    stock: "32 left"
  },
  {
    id: 15,
    imageUrl: "https://picsum.photos/id/115/300/300",
    name: "Smart Home Security Camera",
    price: "$79.99",
    stock: "5 left"
  },
  {
    id: 16,
    imageUrl: "https://picsum.photos/id/116/300/300",
    name: "Aromatherapy Essential Oil Diffuser",
    price: "$34.99",
    stock: "New"
  },
  {
    id: 17,
    imageUrl: "https://picsum.photos/id/117/300/300",
    name: "Fitness Tracker Bracelet",
    price: "$59.99",
    stock: "18 left"
  },
  {
    id: 18,
    imageUrl: "https://picsum.photos/id/118/300/300",
    name: "Ceramic Coffee Mug – 12oz",
    price: "$14.99",
    stock: "100+ available"
  },
  {
    id: 19,
    imageUrl: "https://picsum.photos/id/119/300/300",
    name: "Adjustable Laptop Desk",
    price: "$89.99",
    stock: "6 left"
  },
  {
    id: 20,
    imageUrl: "https://picsum.photos/id/120/300/300",
    name: "Wireless Earbuds with Charging Case",
    price: "$69.99",
    stock: "Limited stock"
  }
];
// const products = []
function App() {
  return (
    <div className="App">
      {products.length>0
      ? products.map(product => (
        <Card
          id={product.id}               
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
        
      ))
    : "No products"}
    </div>
  );
}

export default App;
