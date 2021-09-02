import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useStateValue } from "../state/StateProvider";
import { db } from "../Firebase";

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    {children}
  </div>
);

const StripeCard = () => {
  const [data, func] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const genClientSecret = async () => {
      try {
        const response = await axios.post("/gen_client_secret", {
          amount: data.subtotal * 100,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        alert(error.message);
      }
    };
    genClientSecret();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: data.user,
          },
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(data?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: data.cart,
            amount: paymentIntent.amount / 100,
            orderedAt: paymentIntent.created,
          });
        setSuccess(true);
        setError(null);
        func({ name: "PaymentSuccess" });
        setProcessing(false);
        history.replace("/orders");
      })
      .catch((err) => {
        setSuccess(false);
        setError(err);
        setProcessing(false);
      });
  };

  const handleCardChange = (e) => {
    setDisabled(!e.complete);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="d-flex justify-content-center pt-4 pb-5 bg-light">
      <form onSubmit={handlePayment} className="w-50">
        <h3 className="mb-3 text-center" style={{ color: "#667891" }}>
          Please Use 42424242... as Card Details
        </h3>
        <h4 className="mb-3" style={{ color: "#2c4568" }}>
          Order Total: Rs {data.subtotal}
        </h4>
        <CardElement
          onChange={handleCardChange}
          options={{
            style: {
              base: {
                fontSize: "24px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <div className="ps-3 mt-4 mb-3 d-flex justify-content-center">
          <button
            className="w-25 btn btn-primary"
            type="submit"
            disabled={disabled || processing || success}
          >
            {processing ? "Processing..." : `Pay Rs ${data.subtotal}`}
          </button>
        </div>
        {processing && (
          <h6 className="ps-3 mt-4 text-center" style={{ color: "#61646a" }}>
            Please Do Not Refresh this page
          </h6>
        )}
      </form>
    </div>
  );
};

export default StripeCard;
