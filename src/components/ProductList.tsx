import type Product from "../Types/Product";
import ProductItem from "./ProductItem";

type productListProps = {
  arrayProducts: Product[];
};

function ProductList(props: productListProps) {
  return <div>
    {props.arrayProducts.map(item=><ProductItem key={item.id} product={item} /> )}
  </div>
}

export default ProductList;
