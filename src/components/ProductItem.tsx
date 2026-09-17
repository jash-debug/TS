
import Product from "../Types/Product"
interface ProductItemProps{
  product:Product
}

function ProductItem({product}:ProductItemProps) {
  return (
    <div>
      <h3>{product.name}</h3>

      <h6>Quantity : {product.quantity}</h6>

      <h6>Pruchased : {product.purchased ? "Paid" : "Not Paid"} </h6>

    </div>
  )
}

export default ProductItem