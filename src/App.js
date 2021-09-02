// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import Prime from "./components/Prime";
import Product from "./components/Product";
import Mobiles from "./components/Mobiles";
import Accessories from "./components/Accessories";
import Admin from "./components/Admin";
import { useStateValue } from "./state/StateProvider";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JKPoASFayaTswxyTZzVeBmPpFOwCKSNsnP1ZZWRa5TkorqBa58al555fyt3sPczxZ3LHoLDJUiUpBYyJBSORc3900yNLOYUsF"
);

function App() {
  const fun = useStateValue()[1];
  const d = useStateValue()[0];
  const admin = false;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fun({ name: "SignIn", item: user });
        // User is signed in, see docs for a list of available properties
      } else {
        fun({ name: "SignOut", item: null });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Navbar1 admin={admin} />
            <Home />
            <Footer />
          </Route>
          <Route path="/admin">
            {admin ? (
              <>
                <Navbar1 admin={admin} />
                <Admin />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/cart">
            <Navbar1 admin={admin} />
            <Cart />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signout">
            <SignOut />
          </Route>
          <Route path="/payment">
            {d.item_count === 0 ? (
              <Redirect to="/" />
            ) : (
              <Elements stripe={stripePromise}>
                <Navbar1 admin={admin} />
                <Payment />
              </Elements>
            )}
          </Route>
          <Route path="/orders">
            <Navbar1 admin={admin} />
            <Orders />
          </Route>
          <Route path="/prime">
            <Navbar1 admin={admin} />
            <Prime />
          </Route>
          <Route path="/accessories">
            <Navbar1 admin={admin} />
            <Accessories />
          </Route>
          <Route path="/product">
            <Navbar1 admin={admin} />
            <Product />
          </Route>
          <Route path="/mobiles">
            <Navbar1 admin={admin} />
            <Mobiles />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
