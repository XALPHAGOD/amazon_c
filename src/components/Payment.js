import React from "react";
import StripeCard from "./StripeCard";
import { useStateValue } from "../state/StateProvider";

const PaymentCard = ({ data }) => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "0 0 5px 0",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "15%" }}>
        <img
          src={data.image}
          alt="img"
          style={{ width: "100%", height: "150px", objectFit: "contain" }}
        />
      </div>
      <div style={{ width: "75%", padding: "20px 0" }}>
        <div style={{ fontSize: "1.25rem" }}>{data.desc}</div>
        <div
          style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "500" }}
        >
          Rs {data.price}
        </div>
      </div>
    </div>
  );
};

function Payment() {
  const data = useStateValue()[0];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaeaea",
      }}
    >
      <div
        style={{
          padding: "5px 0",
          textAlign: "center",
          fontSize: "1.35rem",
          fontWeight: "500",
        }}
      >
        Checkout ({data?.item_count} items)
      </div>
      <div
        style={{
          padding: "20px 50px",
          margin: "5px 0 0 0",
          backgroundColor: "white",
          fontSize: "1.1rem",
          fontWeight: "600",
        }}
      >
        <div>Delivery Address: {data?.user}</div>
        <div>Customer: {data?.user ? data?.user.split("@")[0] : "Guest"}</div>
      </div>
      <div
        style={{
          padding: "15px 50px",
          margin: "2px 0",
          backgroundColor: "white",
          fontSize: "1.5rem",
          fontWeight: "500",
        }}
      >
        Review Items & Confirm for Delivery
      </div>
      {data
        ? data.cart.map((item, ind) => <PaymentCard key={ind} data={item} />)
        : ""}
      <StripeCard />
    </div>
  );
}

export default Payment;
