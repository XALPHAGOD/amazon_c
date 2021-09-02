import React from "react";
import "../styles/Navbar1.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import Nav2 from "./Navbar2";

function Navbar1({ admin }) {
  const d = useStateValue();
  return (
    <>
      <div className="nav1">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
          <img className="nav1_logo" src="./images/logo.jpg" alt="Logo" />
        </Link>
        <div className="mrdf">
          <div style={{ marginRight: "1px" }}>
            <div className="row1"></div>
            <div className="row2">
              <LocationOnIcon />
            </div>
          </div>
          <div>
            <div className="row1">Deliver to</div>
            <div className="row2">India</div>
          </div>
        </div>
        <div className="nav1_srch">
          <input type="text" name="nav1_srchtxt" id="nav1_srchtxt" />
          <button type="submit" id="nav1_srchbtn">
            <SearchIcon />
          </button>
        </div>
        <div
          style={{
            width: "350px",
            color: "white",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div className="row1">Hello,</div>
            <div className="row2">
              {d[0].user ? (
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/signout"
                >
                  {d[0].user.split("@")[0]}
                </Link>
              ) : (
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/signin"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
          <div>
            <div className="row1">Returns</div>
            <div className="row2">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/orders"
              >
                & Orders
              </Link>
            </div>
          </div>
          <div>
            <div className="row1">Your</div>
            <div className="row2">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/prime"
              >
                Prime
              </Link>
            </div>
          </div>
          <div style={{ marginLeft: "5px" }}>
            <div className="row1 pdf">{d[0].item_count}</div>
            <div className="row2 pdf">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/cart"
              >
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
          {admin && (
            <div className="ms-2">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.75rem",
                }}
                to="/admin"
              >
                A
              </Link>
            </div>
          )}
        </div>
      </div>
      <Nav2 />
    </>
  );
}

export default Navbar1;
