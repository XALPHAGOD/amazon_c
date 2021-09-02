import React from "react";

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const OrderData = ({ order }) => {
  const timestamp = new Date(order.data.orderedAt * 1000);
  return (
    <div className="px-3 pt-3 m-3" style={{ backgroundColor: "#fff" }}>
      <div className="d-flex justify-content-between">
        <div>Order Id: {order.id}</div>
        <div>
          Order Total ({order.data.cart.length}{" "}
          {order.data.cart.length === 1 ? "item" : "items"})
        </div>
      </div>
      <div
        className="d-flex justify-content-between mb-3"
        style={{ fontSize: "1.2rem", fontWeight: "500" }}
      >
        <div>
          Ordered, {timestamp.getDate()} {month[timestamp.getMonth()]}{" "}
          {timestamp.getFullYear()} {timestamp.getHours()}:
          {timestamp.getMinutes()}
        </div>
        <div>Rs {order.data.amount}</div>
      </div>
      {order.data.cart.map((item, ind) => (
        <div
          key={ind}
          className="mt-2 py-3 d-flex justify-content-evenly"
          style={{ borderTop: "2px solid #dfdfdf" }}
        >
          <div
            className="d-flex justify-content-center"
            style={{ flex: "0.1" }}
          >
            <img
              src={item.image}
              alt="prod_img"
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
          </div>
          <div
            className="d-flex align-items-center"
            style={{ flex: "0.7", fontSize: "0.9rem" }}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderData;
