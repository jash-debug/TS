import { useState } from "react";
import Product from "../Types/Product";

interface ProductFormProps {
  addProduct: (newProduct: Product) => void;
}

function ProductForm({ addProduct }: ProductFormProps) {
  const [product, setProduct] = useState({
    name: "",
    purchased: true,
    quantity: 0,
  });

  return (
    <form className="product-form">
      <div className="product-form__header">
        <h2>Add Product</h2>
      </div>

      <div className="product-form__field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter product name"
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
          }}
        />
      </div>

      <div className="product-form__field">
        <label htmlFor="purchased">Purchased</label>
        <input
          id="purchased"
          name="purchased"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) 
              setProduct({...product, purchased:true})
            else
              setProduct({...product, purchased:false})
          }}
        />
      </div>

      <div className="product-form__field">
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          placeholder="1"
          onChange={(e) => {
            setProduct({ ...product, quantity: +e.target.value });
          }}
        />
      </div>

      <button className="product-form__button"
      onClick={(e) => {
          e.preventDefault()
          
          const newProduct = new Product(product.name,product.quantity,product.purchased);
          addProduct(newProduct);
      }}>
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
