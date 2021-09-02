import React from "react";
import "../styles/Home.css";
import Card from "./Card";
import Carousel from "./HomeCarousel";
import { cardData } from "../data/homeData";

const RandomOrder = () => {
  const n = cardData.length;
  let arr = Array.from({ length: n }, (_, index) => index);
  for (let i = 0; i < n; i++) {
    let ind = Math.floor(Math.random() * n);
    let temp = arr[ind];
    arr[ind] = arr[i];
    arr[i] = temp;
  }
  return (
    <div className="row">
      {arr.map((ind) => (
        <Card data={cardData[ind]} key={ind} />
      ))}
    </div>
  );
};
function Home() {
  return (
    <div className="home">
      <Carousel />
      <div className="container">
        <div className="row" style={{ padding: "0 20px" }}>
          <div
            className="col"
            style={{
              height: "40px",
              padding: "0 20px",
              backgroundColor: "white ",
              fontSize: "12px",
              fontWeight: "500",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery.
            <a
              href="https://www.amazon.in"
              target="_"
              style={{ color: "#007185", textDecoration: "none" }}
            >
              &nbsp;Click here to go to amazon.in
            </a>
          </div>
        </div>
        <RandomOrder />
      </div>
    </div>
  );
}

export default Home;
