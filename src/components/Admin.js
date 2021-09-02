import React, { useState } from "react";
import "../styles/Admin.css";

const Admin = () => {
  const [desc, setdesc] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setprice] = useState(0);
  const [ratings, setratings] = useState(0);
  const [feature, setfeature] = useState("");
  const [features, setfeatures] = useState([]);
  const handleAddFeature = (e) => {
    e.preventDefault();
    setfeatures([...features, feature]);
    setfeature("");
  };
  const resetDetails = () => {
    setdesc("");
    setbrand("");
    setprice(0);
    setratings(0);
    setfeature("");
    setfeatures([]);
  };
  const handleAddProduct = () => {
    const prodData = {
      desc,
      brand,
      price,
      ratings,
      features,
    };
    console.log(prodData);
    resetDetails();
  };
  return (
    <div className="d-flex px-5">
      <div className="w-50 p-3">
        <h3>Add New Product</h3>
        <h6>Description</h6>
        <textarea
          name="desc"
          id="desc"
          cols="75"
          rows="3"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <br />
        <br />
        <h6>Brand</h6>
        <textarea
          name="brand"
          id="brand"
          cols="75"
          rows="1"
          value={brand}
          onChange={(e) => setbrand(e.target.value)}
        />
        <br />
        <br />
        <div className="d-flex justify-content-evenly" style={{ width: "95%" }}>
          <div className="w-50">
            <h6>Price</h6>
            <input
              type="number"
              min={0}
              name="price"
              id="price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div className="w-50">
            <h6>Ratings</h6>
            <input
              type="number"
              min={0}
              name="ratings"
              id="ratings"
              value={ratings}
              onChange={(e) => setratings(e.target.value)}
            />
          </div>
        </div>
        <br />
        <br />
        <h6>Features</h6>
        <form className="d-flex" onSubmit={handleAddFeature}>
          <textarea
            name="feature"
            id="feature"
            cols="50"
            rows="2"
            value={feature}
            onChange={(e) => setfeature(e.target.value)}
          />
          <button
            className="btn ms-5"
            type="submit"
            style={{ color: "white", backgroundColor: "#232f3e" }}
          >
            Add Feature
          </button>
        </form>
        <br />
        <br />
        <div className="d-flex justify-content-end" style={{ width: "576px" }}>
          <button
            className="btn mx-5"
            onClick={resetDetails}
            style={{ color: "white", backgroundColor: "#6cbdc7" }}
          >
            Reset
          </button>
          <button
            className="btn me-4"
            onClick={handleAddProduct}
            style={{ backgroundColor: "#f3a847" }}
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="w-50 p-3">
        <h3>Product Details</h3>
        <h6>Description</h6>
        <p className="display">{desc}</p>
        <br />
        <br />
        <h6>Brand</h6>
        <p className="display">{brand}</p>
        <br />
        <br />
        <div className="d-flex justify-content-evenly" style={{ width: "95%" }}>
          <div className="w-50">
            <h6>Price</h6>
            <div className="display">{price}</div>
          </div>
          <div className="w-50">
            <h6>Ratings</h6>
            <div className="display">{ratings}</div>
          </div>
        </div>
        <br />
        <br />
        <h6>Features</h6>
        <ul>
          {features.map((item, ind) => (
            <li key={ind} style={{ margin: "10px 0" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
