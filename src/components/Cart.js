import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Cart.css";
import { useStateValue } from "../state/StateProvider";

const CartItem = ({ data, func }) => {
  const removeFromCart = () => {
    func({ name: "RemoveFromCart", item: data });
  };
  return (
    <div className="cart_item">
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img className="cart_img" src={data.image} alt="" />
      </div>
      <div className="cart_details">
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {data?.desc.length <= 150
            ? data?.desc
            : data?.desc.slice(0, 150) + ". . ."}
        </p>
        <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
          Rs {data.price}
        </span>
        <span style={{ fontSize: "1rem" }}>Ratings: {data.ratings}</span>
        <button className="cart_remove" onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

function Cart() {
  const d = useStateValue();
  const Data = d[0].cart;
  let ad_url =
    "./images/home_carousel/home" +
    ((Math.floor(Math.random() * 10) % 6) + 1) +
    ".jpg";
  const history = useHistory();
  return (
    <div className="cart">
      <div className="cart_left">
        <div
          style={{
            height: "200px",
            borderBottom: "5px solid #eaeded",
            marginBottom: "10px",
            fontSize: "1.6rem",
            fontWeight: "500",
          }}
        >
          <div style={{ height: "80%", overflow: "clip" }}>
            <img src={ad_url} style={{ width: "100%" }} alt="ad_img" />
          </div>
          <div style={{ minHeight: "20%" }}>
            Your Amazon Cart {d[0].item_count === 0 ? " is Empty" : ""}
          </div>
        </div>
        {Data.map((item, index) => (
          <CartItem data={item} func={d[1]} key={index} />
        ))}
      </div>
      <div className="cart_right">
        <div style={{ height: "30%", fontSize: "1.4rem" }}>
          Subtotal({d[0].item_count} items): <strong>Rs {d[0].subtotal}</strong>
        </div>
        <div style={{ height: "30%", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            name="gift"
            id="gift"
            disabled={d[0].subtotal === 0}
          />
          <label htmlFor="gift" style={{ fontSize: "0.9rem" }}>
            &nbsp;This order contains a gift card
          </label>
        </div>
        <div
          style={{
            height: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => history.push("/payment")}
            className="cart_remove"
            disabled={d[0].subtotal === 0}
            style={{
              width: "70%",
              position: "relative",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
