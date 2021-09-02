import React, { useState, useEffect } from "react";
import "../styles/Mobiles.css";
import { useStateValue } from "../state/StateProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const Mobile = ({ item }) => {
  const d = useStateValue();
  const func = d[1];
  const addToCart = () => {
    // console.log(d);
    func({ name: "AddToCart", item: item });
  };
  return (
    <div style={{ width: "50%", padding: "0 20px" }}>
      <div
        style={{
          width: "100%",
          padding: "20px 0",
          borderBottom: "2px solid #eaeded",
        }}
      >
        <Link
          to={{ pathname: "/product", state: { data: item } }}
          style={{ textDecoration: "none" }}
        >
          <div className="mobile">
            <div
              style={{
                width: "25%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={item.image}
                alt="item"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="mobile_desc">
              <div style={{ fontSize: "1.35rem" }}>{item.desc}</div>
              <h6 style={{ marginTop: "10px", fontSize: "1.15rem" }}>
                Ratings: {item.ratings}
              </h6>
              <h4 style={{ marginTop: "10px", fontSize: "1.75rem" }}>
                Rs {item.price}
              </h4>
            </div>
          </div>
        </Link>
        <div
          style={{
            padding: "0 50px 0 20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            disabled={!d[0].user}
            className="cart_add"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

function Mobiles() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(
          `${process.env.PUBLIC_URL}/data/mobiles.json`
        );
        setData(resp.data.mobileData);
      } catch (err) {
        setData([]);
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="mobiles">
      {Data ? Data.map((item, ind) => <Mobile key={ind} item={item} />) : ""}
    </div>
  );
}

export default Mobiles;
