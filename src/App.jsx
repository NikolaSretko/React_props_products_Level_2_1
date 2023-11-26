import ProductList from './assets/components/Products/ProductList';
import products from './assets/data/products';
import './App.scss';

function App() {

  return (
    <>
    <h1>Shop</h1>
  <ProductList productArr={products}/>
    </>
  )
}

export default App
