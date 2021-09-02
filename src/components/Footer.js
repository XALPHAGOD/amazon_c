import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";

function Footer() {
  const d = useStateValue()[0].user;
  return (
    <div>
      <div
        style={{
          height: "200px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "130px",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            position: "absolute",
            top: "45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "4px", fontSize: "0.8rem" }}>
            See personalized recommendations
          </div>
          <div>
            <Link to={d ? "#" : "/signin"}>
              <button
                className="footer_signIn"
                style={{
                  width: "225px",
                  padding: "4px 0 5px 0",
                  border: "",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
          <div style={{ marginTop: "3px", fontSize: "0.75rem" }}>
            New customer?{" "}
            <Link
              to={d ? "/signout" : "/register"}
              style={{ color: "#007185", textDecoration: "none" }}
            >
              {" "}
              Start here.
            </Link>
          </div>
        </div>
      </div>
      <a href="#nav2" style={{ textDecoration: "none" }}>
        <div
          style={{
            padding: "15px",
            color: "white",
            backgroundColor: "#37475A",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          Back to top
        </div>
      </a>
      <div style={{ color: "#dddddd", backgroundColor: "#232f3e" }}>
        <div
          style={{
            padding: "50px 300px",
            borderBottom: "1px solid #3a4553",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div>
              <strong>Get to Know Us</strong>
              <div className="footer_items">About Us</div>
              <div className="footer_items">Careers</div>
              <div className="footer_items">Press Releases</div>
              <div className="footer_items">Amazon Cares</div>
              <div className="footer_items">Gift a Smile</div>
            </div>
          </div>
          <div>
            <div>
              <strong>Connect with Us</strong>
              <div className="footer_items">Facebook</div>
              <div className="footer_items">Twitter</div>
              <div className="footer_items">Instagram</div>
            </div>
          </div>
          <div>
            <div>
              <strong>Make Money with Us</strong>
              <div className="footer_items">Sell on Amazon</div>
              <div className="footer_items">Sell under Amazon Accelerator</div>
              <div className="footer_items">Amazon Global Selling</div>
              <div className="footer_items">Become an Affiliate</div>
              <div className="footer_items">Fulfilment by Amazon</div>
              <div className="footer_items">Advertise Your Products</div>
              <div className="footer_items">Amazon pay on Merchants</div>
            </div>
          </div>
          <div>
            <div>
              <strong>Let Us Help You</strong>
              <div className="footer_items">COVID-19 and Amazon</div>
              <div className="footer_items">Your Account</div>
              <div className="footer_items">Returns Centre</div>
              <div className="footer_items">100% Purchase Protection</div>
              <div className="footer_items">Amazon App Download</div>
              <div className="footer_items">Amazon Assistant Download</div>
              <div className="footer_items">Help</div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "50px 300px 40px 300px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="footer_countries">Australia</div>
          <div className="footer_countries">Brazil</div>
          <div className="footer_countries">Canada</div>
          <div className="footer_countries">China</div>
          <div className="footer_countries">France</div>
          <div className="footer_countries">Germany</div>
          <div className="footer_countries">India</div>
          <div className="footer_countries">Italy</div>
          <div className="footer_countries">Japan</div>
          <div className="footer_countries">Mexico</div>
          <div className="footer_countries">Netherlands</div>
          <div className="footer_countries">Poland</div>
          <div className="footer_countries">Singapore</div>
          <div className="footer_countries">Spain</div>
          <div className="footer_countries">Turkey</div>
          <div className="footer_countries">United Arab Emirates</div>
          <div className="footer_countries">United Kingdom</div>
          <div className="footer_countries">United States</div>
        </div>
      </div>
      <div
        style={{
          color: "#dddddd",
          backgroundColor: "#131a22",
        }}
      >
        <div
          style={{
            padding: "20px 310px 20px 270px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="footer_cont">
              <div className="footer_cont_h">AbeBooks</div>
              <div className="footer_cont_r">Books, art</div>
              <div className="footer_cont_r">& collectibles</div>
            </div>
            <div className="footer_cont">
              <div className="footer_cont_h">Shopbop</div>
              <div className="footer_cont_r">Designer</div>
              <div className="footer_cont_r">Fashion Brands</div>
            </div>
          </div>
          <div>
            <div className="footer_cont">
              <div className="footer_cont_h">Amazon Web Services</div>
              <div className="footer_cont_r">Scalable Cloud</div>
              <div className="footer_cont_r">Computing Services</div>
            </div>
            <div className="footer_cont">
              <div className="footer_cont_h">Amazon Business</div>
              <div className="footer_cont_r">Everything For</div>
              <div className="footer_cont_r">Your Business</div>
            </div>
          </div>
          <div>
            <div className="footer_cont">
              <div className="footer_cont_h">Audible</div>
              <div className="footer_cont_r">Books, art</div>
              <div className="footer_cont_r">& collectibles</div>
            </div>
            <div className="footer_cont">
              <div className="footer_cont_h">Prime Now</div>
              <div className="footer_cont_r">2-Hour Delivery</div>
              <div className="footer_cont_r">on Everyday Items</div>
            </div>
          </div>
          <div>
            <div className="footer_cont">
              <div className="footer_cont_h">DPReview</div>
              <div className="footer_cont_r">Digital</div>
              <div className="footer_cont_r">Photography</div>
            </div>
            <div className="footer_cont">
              <div className="footer_cont_h">Amazon Prime Music</div>
              <div className="footer_cont_r">75 million songs, ad-free</div>
              <div className="footer_cont_r">
                Over 10 million podcasts episodes
              </div>
            </div>
          </div>
          <div>
            <div className="footer_cont">
              <div className="footer_cont_h">IMDb</div>
              <div className="footer_cont_r">Movies, TV</div>
              <div className="footer_cont_r">& Celebrities</div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "0 460px 35px 460px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "12px" }}>Conditions of Use & Sale</div>
          <div style={{ fontSize: "12px" }}>Privacy Notice</div>
          <div style={{ fontSize: "12px" }}>Interest-Based Ads</div>
          <div style={{ fontSize: "12px" }}>
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
