import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-icon">🌿</span>
        <span><strong>Paradise Nursery</strong><small>Where Green Meets Serenity</small></span>
      </Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link" aria-label={`Cart with ${totalQuantity} plants`}>
          <span className="cart-symbol" aria-hidden="true">🛒</span>
          <span className="cart-count">{totalQuantity}</span>
          <span>Cart</span>
        </NavLink>
      </nav>
    </header>
  );
}
