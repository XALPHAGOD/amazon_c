import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { db } from "../Firebase";
import { useStateValue } from "../state/StateProvider";
import OrderData from "./OrderData";

function Orders() {
  const data = useStateValue()[0];
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (data?.uid) {
      db.collection("users")
        .doc(data?.uid)
        .collection("orders")
        .orderBy("orderedAt", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
          setLoading(false);
        });
    } else setLoading(false);
  }, [data]);
  return (
    <div>
      {loading ? (
        <ReactLoading
          className="w-100 d-flex justify-content-center my-auto"
          type="bubbles"
          color="#232f3e"
          height="300px"
        />
      ) : (
        <>
          {orders.length !== 0 ? (
            <div
              className="p-5 d-flex flex-column justify-content-center"
              style={{ backgroundColor: "#efefef" }}
            >
              <h2 className="px-3">Your Orders</h2>
              {orders.map((order, ind) => (
                <OrderData key={ind} order={order} />
              ))}
            </div>
          ) : (
            <h2 className="text-center">You Currently Don't Have Any Orders</h2>
          )}
        </>
      )}
    </div>
  );
}

export default Orders;
