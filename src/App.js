import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Register from "./page/Register";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
