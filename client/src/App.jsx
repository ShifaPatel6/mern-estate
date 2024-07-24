import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./Components/Header";

export default function App() {
  return <BrowserRouter>
  <Header/ >
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Profile" element={<Profile />} />
   
  </Routes>
  </BrowserRouter>
  
}