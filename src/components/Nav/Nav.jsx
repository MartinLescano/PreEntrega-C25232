import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import './Nav.css';

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav>     
            <div>
                <Link to={"/"}>Home</Link>
            </div>
            <div>
                <Link to={"/"}>Products</Link>
            </div>
            <div>
                <Link to={"/publisher/DC"}>DC</Link>
            </div>
            <div>
                <Link to={"/publisher/Marvel Comics"}>Marvel</Link>
            </div>
            <div>
                <Link to={"/cart"}>Cart</Link>
                {getTotalItems() > 0 && (
                <span className="in-cart">{getTotalItems()}</span>)}
            </div>
        </nav>
    )
}