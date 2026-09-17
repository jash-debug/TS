import './App.css'
import ProductForm from './components/ProductForm'
import { useState } from 'react'
import type Product from './Types/Product';
import ProductList from './components/ProductList';
function App() {

  const [products, setProducts] = useState<Product[]>([]);

  console.log(products);

  function addProduct(newProduct:Product):void {
    setProducts((currArry) => [newProduct,...currArry])
  }

  return (
    <main className="app-shell">
      <ProductForm  addProduct={addProduct}/>
      <ProductList arrayProducts={products} />
    </main>
  )
}

export default App
