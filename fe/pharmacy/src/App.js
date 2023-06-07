import './App.css';

import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";

import Home from "./components/Home";
import Detail from "./components/Detail";
import Pay from "./components/Pay";
import OutletWrapper from "./router/OutletWrapper";
import List from "./components/List";
import PaymentResult from "./components/PaymentResult";
import User from "./components/User";
import PayHistory from "./components/PayHistory";
import PassWord from "./components/PassWord";
import Register from "./components/Register";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OutletWrapper/>}>
          <Route index element={<Home />} />
          <Route path="/product" element={<List/>} />
          <Route path="/product-detail/:id" element={<Detail/>} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/profile" element={<User />} />
          <Route path="/history" element={<PayHistory />} />
          <Route path="/profile/password" element={<PassWord />} />
        <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/payment-info" element={<PaymentResult />} />
      </Routes>

    </>
  );
}

export default App;
