import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>
        <a href="/plants">Continue Shopping</a>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
              />

              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>
                Total Cost: ${item.price * item.quantity}
              </p>

              <button onClick={() => decreaseQuantity(item)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => increaseQuantity(item)}>
                +
              </button>

              <button onClick={() => deleteItem(item.id)}>
                Delete
              </button>

              <hr />
            </div>
          ))}

          <h2>Total Amount: ${totalAmount}</h2>

          <button onClick={handleCheckout}>
            Checkout
          </button>

          <br />
          <br />

          <a href="/plants">
            <button>Continue Shopping</button>
          </a>
        </>
      )}
    </div>
  );
}

export default CartItem;
