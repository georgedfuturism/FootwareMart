import React from "react";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Product from "./Pages/Product";
import ShowNow from "./Pages/ShowNow";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";
import LoginPage from "./Pages/LoginPage";
import {Dashboard} from "./Pages/dashboard";
import ProductDetails from "./components/ProductDetails";
import Register from "./Pages/Register";
import Home from "./Pages/Home/Home";
import { popularProducts } from "./data";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";




function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Provider store={store}>
        <Router>
      <Switch>
        {/* <Route path="/login">
          <LoginPage />
        </Route> */}
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/product/img" component={Product}>
          {/* <Product /> */}
        </Route>
        <Route path="/product" exact component={Products} >
          {/* <Product /> */}
        </Route>

        {/* <Route path="/cart">
          <Cart />
        </Route> */}
        <Route path="/shownow">
          <ShowNow />
        </Route>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

        {/* <Route path="/login">{user ? <Redirect to="/" /> : <LoginPage />}</Route> */}
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
