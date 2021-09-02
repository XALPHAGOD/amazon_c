import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Product.css";
import { useStateValue } from "../state/StateProvider";

function Product() {
  const location = useLocation();
  const { data } = location.state;
  const d = useStateValue();
  const func = d[1];
  const addToCart = () => {
    // console.log(d);
    func({ name: "AddToCart", item: data });
  };
  return (
    <div className="product">
      <div style={{ width: "50%", paddingRight: "20px" }}>
        <div
          style={{
            width: "100%",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={data?.image}
            alt=""
            style={{ width: "80%", height: "400px", objectFit: "contain" }}
          />
        </div>
        <h2>{data?.desc}</h2>
        <div
          style={{ width: "90%", display: "flex", justifyContent: "flex-end" }}
        >
          <h5>by {data?.brand}</h5>
        </div>
        <h3>Price: Rs {data?.price}</h3>
        <h5>Ratings: {data?.ratings}</h5>
        <div
          style={{
            width: "90%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="product_cart_add"
            disabled={!d[0].user}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div
        style={{
          width: "50%",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "25px 20px 20px 35px",
            borderTop: "2px solid #dddddd",
            borderLeft: "2px solid #dddddd",
            borderRadius: "5px",
          }}
        >
          <h4 style={{ marginBottom: "25px" }}>About this item:</h4>
          <ul>
            {data.features.map((item, ind) => (
              <li key={ind} style={{ margin: "10px 0", fontSize: "1.1rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
