import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Heading } from "./Heading";
import { Products } from "./Products";
import { Footer } from "./Footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <Heading />
      <div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
function ProductList() {
  let [prod, setProd] = useState([
    {
      name: "Fancy Products",
      price: "$40.00 - $80.00",
      button: "View Options",
    },
    {
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00 $18.00",
      button: "Add to Cart",
    },
    {
      name: "Sale Item",
      price: "$50.00 $25.00",
      button: "Add to Cart",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
      button: "Add to Cart",
    },
    {
      name: "Sale Item",
      price: "$50.00 $25.00",
      button: "Add to Cart",
    },
    {
      name: "Fancy Products",
      price: "$120.00 - $280.00",
      button: "View Options",
    },
    {
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00 $18.00",
      button: "Add to Cart",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
      button: "Add to Cart",
    },
  ]);
  return (
    <div className="boxes">
      {prod.map((pro) => (
        <Products product={pro} />
      ))}
    </div>
  );
}
export function Addingcart({ product }) {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <div className="product-button">
      <Button
        onClick={() => {
          setValue(value + 1);
        }}
        variant="outlined"
      >
        {product.button}
      </Button>
    </div>
  );
  <Addcart setValue={setValue} />;
}

export function Addcart({ setValue }) {
  let [val, setVal] = useState(0);
  val = setValue;
  return (
    <div>
      <p>
        <ShoppingCartIcon></ShoppingCartIcon> Cart {val}
      </p>
    </div>
  );
}
export default App;
{
  /* <Button
onClick={() => {
  setLike(like + 1);
}}
variant="outlined"
>
👍 {like}
</Button> */
}
