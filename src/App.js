import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Register from "./page/Register";
import Home from "./page/Home";
import Comm from "./page/Comm";
import Info from "./page/Info";
import Payment from "./page/Payment";
import TradingBot from "./page/TradingBot";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="commission" element={<Comm/>}/>
        <Route path="info" element={<Info/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="trading-bot" element={<TradingBot/>}/>
      </Routes>
    </div>
  );
}

export default App;
