import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Addcart } from "./App";

export function Heading({ setValue }) {
  return (
    <div>
      <div className="nav-bar">
        <h3 className="start">Start Bootstrap</h3>
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
        <Addcart setValue={setValue} />
      </div>
      <div className="sub-topic">
        <h1 className="heading">Shop in Style</h1>
        <span>with this home page template</span>
      </div>
    </div>
  );
}
