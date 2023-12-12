import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Pets from './pages/Pets';
import Products from './pages/Products';
import Appointments from './pages/Appointments';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Login from "./pages/Login";
import Register from "./pages/Register";

//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home/*" element={<Home />} />
          <Route path="/pets" element={<Pets />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/appointments" element={<Appointments />}/>
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/profile" element={<Profile />}/>
          
          
        </Route>
        {/* <Route path="/home/*" element={<Home />}/> */}
        
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}


