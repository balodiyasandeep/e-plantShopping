import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => window.alert("Checkout is coming soon!");

  return (
    <>
      <Header />
      <main className="cart-page">
        <div className="page-heading"><p className="eyebrow green">Your Green Basket</p><h1>Shopping Cart</h1></div>
        <section className="cart-summary" aria-label="Cart summary">
          <div><span>Total plants</span><strong>{totalQuantity}</strong></div>
          <div><span>Total cart amount</span><strong>${totalCost.toFixed(2)}</strong></div>
        </section>

        {items.length === 0 ? (
          <section className="empty-cart"><span>🪴</span><h2>Your cart is empty</h2><p>Add a plant and bring some green home.</p></section>
        ) : (
          <section className="cart-list" aria-label="Items in cart">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details"><p className="item-category">{item.category}</p><h2>{item.name}</h2><p>Unit price: <strong>${item.price.toFixed(2)}</strong></p></div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name}`}>−</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name}`}>+</button>
                </div>
                <div className="line-total"><span>Item total</span><strong>${(item.price * item.quantity).toFixed(2)}</strong></div>
                <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </article>
            ))}
          </section>
        )}

        <div className="cart-actions">
          <Link className="secondary-button" to="/plants">Continue Shopping</Link>
          <button className="primary-button" onClick={checkout}>Checkout</button>
        </div>
      </main>
    </>
  );
}
