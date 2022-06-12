import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Navbar, AboutPage, Work, ContactUs } from "./components/index";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Landing/>} />
          <Route exact={true} path="/about" element={<AboutPage/>} />
          <Route exact={true} path="/work" element={<Work/>} />
          <Route exact={true} path="/contact" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    
  );
}
export default App;
