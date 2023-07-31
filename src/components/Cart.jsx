import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../styles/cart.scss";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
     dispatch({
       type: "deleteHandler",
       payload: id,
     });
     dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id ,
    });
    dispatch({ type: "calculatePrice" });
  };
  const increment = (id) => {
    dispatch({
      type: "addtoCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const { cartItems , subTotal, total, tax, shiping } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              name={i.name}
              Imgsrc={i.Imgsrc}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No items</h1>
        )}
      </main>
      <aside>
        
        <h2>Subtotal : ${subTotal}</h2>
        <h2>Shiping : ${shiping}</h2>
        <h2>Tax : ${tax}</h2>
        <h2>Total : ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  name,
  Imgsrc,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={Imgsrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
