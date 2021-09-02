import React, { useState } from "react";
import ReactLoading from "react-loading";
import "../styles/Register.css";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const handleRegister = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const resp = await auth.createUserWithEmailAndPassword(email, password);
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
    <div className="register">
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
        <div className="register_form">
          <div style={{ fontSize: "1.7rem", fontWeight: "500" }}>
            Create Account
          </div>
          <div
            style={{
              margin: "10px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="register_input"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Email
            </label>
            <input
              type="text"
              name="register_input"
              id="register_input"
              style={{
                height: "2rem",
                padding: "0 10px",
                margin: "5px 0 15px 0",
                border: "1px solid grey",
                outline: "none",
                borderRadius: "3px",
              }}
              value={email}
              onChange={(evt) => setemail(evt.target.value)}
              autoComplete="off"
            />
            <label
              htmlFor="register_password"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              name="register_password"
              id="register_password"
              style={{
                height: "2rem",
                padding: "0 10px",
                margin: "5px 0 5px 0",
                border: "1px solid grey",
                outline: "none",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: "500",
              }}
              placeholder="At least 6 characters"
              value={password}
              onChange={(evt) => setpassword(evt.target.value)}
            />
            <label
              htmlFor="register_password"
              style={{ margin: "0 0 20px 0", fontSize: "12px" }}
            >
              Passwords must be at least 6 characters.
            </label>
            <button
              type="submit"
              className="sign_in_btn"
              disabled={loading}
              onClick={handleRegister}
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
          <div style={{ marginTop: "20px", fontSize: "12px" }}>
            Already have an account?{" "}
            {loading ? (
              <span
                style={{
                  color: "#0066c0",
                  textDecoration: "none",
                }}
              >
                Sign in{" "}
                <ArrowRightSharpIcon
                  style={{
                    fontSize: "20px",
                    position: "relative",
                    left: "-7px",
                  }}
                />
              </span>
            ) : (
              <Link
                to="/signin"
                style={{
                  color: "#0066c0",
                  textDecoration: "none",
                }}
              >
                Sign in{" "}
                <ArrowRightSharpIcon
                  style={{
                    fontSize: "20px",
                    position: "relative",
                    left: "-7px",
                  }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}
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

export default Register;
