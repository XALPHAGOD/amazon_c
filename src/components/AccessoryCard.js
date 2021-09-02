import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import "../styles/AccessoryCard.css";

const AccessoryCard = ({ data }) => {
  const d = useStateValue();
  const func = d[1];
  const addToCart = () => {
    func({ name: "AddToCart", item: data });
  };
  return (
    <div className="accessory_card m-1">
      <Link
        to={{ pathname: "/product", state: { data: data } }}
        style={{ textDecoration: "none" }}
      >
        <img
          src={data.image}
          alt={data.brand}
          style={{ width: "180px", height: "180px", objectFit: "contain" }}
        />
        <div
          style={{
            width: "180px",
            height: "50px",
            color: "black",
            marginTop: "20px",
            fontSize: "14px",
            wordBreak: "break-word",
          }}
        >
          {data.desc.slice(0, 40)}...
        </div>
      </Link>
      <div style={{ fontSize: "1.25rem", fontWeight: "500" }}>
        Rs {data.price}
      </div>
      <div>Ratings: {data.ratings}</div>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <button
          disabled={!d[0].user}
          onClick={addToCart}
          className="accessory_cart_add "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AccessoryCard;
