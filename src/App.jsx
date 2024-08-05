import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Signup from "./components/pages/signup/Signup";
import Login from "./components/pages/login/Login";
import Error from "./components/notfound/Error";
import Wishlist from "./components/wishlist/Wishlist";
import ProductDetails from "./components/productDetails/ProductDetails";
import AccountDropDown from "./components/accountDropdown/AccountDropDown";
import Cart from "./components/Cart/Cart";
import Contact from "./components/pages/contact/Contact";
import { Provider } from "react-redux";
import store from "./features/cart/store";
import FlashSales from "./components/pages/home/sections/FlashSales";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="*" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/Signup" Component={Signup} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="*" Component={Error} />
          <Route exact path="/wishlist" Component={Wishlist} />
          <Route exact path="/productDetails" Component={ProductDetails} />
          <Route exact path="/AccountDropDown" Component={AccountDropDown} />
          <Route exact path="/Cart" Component={Cart} />
          <Route path="/flash-sales" component={FlashSales} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
