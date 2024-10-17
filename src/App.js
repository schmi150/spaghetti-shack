import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import AppNavbar from "./components/Navbar.js";
import Menu from "./components/Menu.js";
import Catering from "./components/Catering.js";
import Specials from "./components/Specials.js";
import Locations from "./components/Locations.js";
import Hiring from "./components/Hiring.js";
import Franchising from "./components/Franchising.js";
import Fundraisers from "./components/Fundraisers.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/catering" exact element={<Catering />} />
          <Route path="/specials" exact element={<Specials />} />
          <Route path="/locations" exact element={<Locations />} />
          <Route path="/hiring" exact element={<Hiring />} />
          <Route path="/franchising" exact element={<Franchising />} />
          <Route path="/fundraisers" exact element={<Fundraisers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
