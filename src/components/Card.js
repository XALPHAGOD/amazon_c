import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";

const MiniCard = ({ data }) => {
  return (
    <div className="minicard">
      <img className="minicard_img" src={data.url} alt="" />
      <div className="minicard_text">{data.text}</div>
    </div>
  );
};

function Card1({ data }) {
  const d = useStateValue()[0];
  return (
    <>
      {data.type === 3 ? (
        <div
          className="card col col-sm-3"
          style={{ padding: "0", backgroundColor: "inherit" }}
        >
          <div
            style={{
              height: "145px",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h4 className="card_title">
              {d.user ? "" : "Sign in for the best experience"}
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                className="btn"
                to={d.user ? "/signout" : data.link}
                style={{
                  width: "300px",
                  color: "black",
                  backgroundColor: "#ffd814",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              >
                Sign {d.user ? "out" : "in securely"}
              </Link>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={data.url} alt="" style={{ backgroundColor: "inherit" }} />
          </div>
        </div>
      ) : (
        <div className="card col col-sm-3">
          <h4 className="card_title">{data.title}</h4>
          {data.type === 1 ? (
            <img className="card_img" src={data.url} alt="" />
          ) : (
            <div style={{ margin: "10px 0" }}>
              <div className="minicard_row">
                <MiniCard data={data.mini_data[0]} />
                <MiniCard data={data.mini_data[1]} />
              </div>
              <div className="minicard_row">
                <MiniCard data={data.mini_data[2]} />
                <MiniCard data={data.mini_data[3]} />
              </div>
            </div>
          )}
          <Link
            to={{ pathname: data.link, state: { data: data?.data_path || 0 } }}
          >
            {data.link_text}
          </Link>
        </div>
      )}
    </>
  );
}

export default Card1;
