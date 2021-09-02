import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import "../styles/Accessories.css";
import AccessoryCard from "./AccessoryCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Accessories() {
  const location = useLocation();
  const { data } = location.state;
  const [Data, setData] = useState([]);
  const [Selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}${data}`)
      .then((resp) => {
        setData(resp.data.Data);
        setSelected(resp.data?.Data[0]?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <ReactLoading
          className="w-100 d-flex justify-content-center my-auto"
          type="bubbles"
          color="#232f3e"
          height="300px"
        />
      ) : (
        <div style={{ padding: "10px 0 10px 10px", display: "flex" }}>
          <div
            style={{
              width: "15.5%",
              padding: "10px",
              marginRight: "15px",
              borderRight: "2px solid #dddddd",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {Data.map((item, ind) => (
              <div
                key={ind}
                style={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  name="accessory_select"
                  id={item.id}
                  defaultChecked={ind === 0}
                  onChange={() => setSelected(item.data)}
                />
                <label
                  htmlFor={item.id}
                  style={{
                    marginLeft: "5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
          <div
            style={{
              width: "80%",
            }}
          >
            <div
              style={{
                padding: "0 0 10px 10px",
                borderBottom: "2px solid #dddddd",
                fontSize: "1.25rem",
              }}
            >
              {Selected?.length || 0} items
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {Selected
                ? Selected.map((item, ind) => (
                    <AccessoryCard key={ind} data={item} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Accessories;
