import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";
import { useStateValue } from "../state/StateProvider";

function SignOut() {
  const [loading, setLoading] = useState(false);
  const d = useStateValue();
  const history = useHistory();
  const handleSignOut = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    if (d[0].user) {
      try {
        await auth.signOut();
        setLoading(false);
        history.replace("/");
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    }
  };
  return (
    <div style={{ height: "100vh", backgroundColor: "#efefef" }}>
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
        <div
          style={{
            width: "22.5%",
            backgroundColor: "#f4f4f4",
            padding: "20px 30px",
            border: "1px solid lightgray",
            boxShadow: "0 0 10px #dddddd",
            borderRadius: "4px",
          }}
        >
          <div style={{ fontSize: "2.2rem" }}>Sign-Out</div>
          <div
            style={{
              margin: "10px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              type="submit"
              onClick={handleSignOut}
              style={{
                height: "1.9rem",
                backgroundImage: "linear-gradient(#ffdc89, #ddb757)",
                boxShadow: "0 0 7px #eebb39",
                border: "1px solid #eebb39",
                outline: "none",
                borderRadius: "4px",
              }}
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
          type="bubbles"
          color="#232f3e"
          height="3.75rem"
        />
      )}
    </div>
  );
}

export default SignOut;
