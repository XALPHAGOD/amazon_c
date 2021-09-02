import React, { useState } from "react";
import ReactLoading from "react-loading";
import "../styles/SignIn.css";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSignIn = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const resp = await auth.signInWithEmailAndPassword(email, password);
      // setemail("");
      // setpassword("");
      // console.log(resp);
      if (resp) {
        setLoading(false);
        history.replace("/");
      }
    } catch (error) {
      // setemail("");
      // setpassword("");
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="sign_in">
      <div
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="./images/logo2.png" alt="logo" style={{ height: "100%" }} />
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="sign_in_form">
          <div style={{ fontSize: "2.2rem" }}>Sign-In</div>
          <div
            style={{
              margin: "10px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="sign_in_input"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Email or mobile phone number
            </label>
            <input
              type="text"
              name="sign_in_input"
              id="sign_in_input"
              style={{
                height: "2rem",
                padding: "0 10px",
                margin: "5px 0 15px 0",
                border: "1px solid #a6a6a6",
                outline: "none",
                borderRadius: "4px",
              }}
              value={email}
              onChange={(evt) => setemail(evt.target.value)}
              autoComplete="off"
            />
            <label
              htmlFor="sign_in_password"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              name="sign_in_password"
              id="sign_in_password"
              style={{
                height: "2rem",
                padding: "0 10px",
                margin: "5px 0 15px 0",
                border: "1px solid #a6a6a6",
                outline: "none",
                borderRadius: "4px",
              }}
              value={password}
              onChange={(evt) => setpassword(evt.target.value)}
            />
            <button
              type="submit"
              className="sign_in_btn"
              onClick={handleSignIn}
              disabled={loading}
            >
              Continue
            </button>
          </div>
          <div style={{ fontSize: "0.8rem" }}>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.google.com"
              target="_"
              style={{ textDecoration: "none" }}
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.google.com"
              target="_"
              style={{ textDecoration: "none" }}
            >
              Privacy Notice
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>
            <ArrowRightSharpIcon
              style={{
                color: "#656565",
                fontSize: "20px",
                position: "relative",
                left: "-7px",
              }}
            />
            <a
              href="https://www.google.com"
              target="_"
              style={{
                textDecoration: "none",
                fontSize: "0.8rem",
                position: "relative",
                left: "-7px",
              }}
            >
              Need Help?
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "0 7px" }}>
            <div
              style={{
                width: "120px",
                height: "10px",
                borderBottom: "1px solid #d7d7d7",
              }}
            ></div>
          </div>
          <div style={{ color: "#767676", fontSize: "0.8rem" }}>
            New to Amazon?
          </div>
          <div style={{ padding: "0 7px" }}>
            <div
              style={{
                width: "120px",
                height: "10px",
                borderBottom: "1px solid #d7d7d7",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <span style={{ width: "22.5%" }}>
              <button className="create_acc_btn" disabled>
                Create your Amazon account
              </button>
            </span>
          ) : (
            <Link to="/register" style={{ width: "22.5%" }}>
              <button type="Submit" className="create_acc_btn">
                Create your Amazon account
              </button>
            </Link>
          )}
        </div>
      </div>
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "70%",
            height: "1px",
            borderBottom: "1px solid #d1d1d1",
            boxShadow: "0px 5px 15px #82858a",
          }}
        ></div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "15%",
              marginTop: "20px",
              fontSize: "11px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://www.google.com"
              target="_"
              style={{ textDecoration: "none" }}
            >
              Conditions of Use
            </a>
            <a
              href="https://www.google.com"
              target="_"
              style={{ textDecoration: "none" }}
            >
              Privacy Notice
            </a>
            <a
              href="https://www.google.com"
              target="_"
              style={{ textDecoration: "none" }}
            >
              Help
            </a>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            fontSize: "11px",
            textAlign: "center",
          }}
        >
          © 1996-2021, Amazon.com, Inc. or its affiliates
        </div>
      </div>
      {loading && (
        <ReactLoading
          className="w-100 d-flex justify-content-center my-auto"
          type="bars"
          color="#232f3e"
          height="3.75rem"
        />
      )}
    </div>
  );
}

export default SignIn;
