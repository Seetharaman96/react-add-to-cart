import Button from "@mui/material/Button";
import { Addingcart } from "./App";
import { Addcart } from "./App";

export function Products({ product }) {
  return (
    <div className="items">
      <div className="dimensions">
        <h2>
          450<span className="multiply">✖</span>300
        </h2>
      </div>
      <div>
        <div className="product">
          <h2 className="product-name">{product.name}</h2>
          <span className="product-rating">{product.rating}</span>
          <p className="product-rupees">{product.price}</p>
          <Addingcart product={product} />
        </div>
      </div>
    </div>
  );
}
