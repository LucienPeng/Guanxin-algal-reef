import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar-component";
import FooterComponent from "./components/Footer-component";
import HomePage from "./pages/Home-page";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/Guanxin-algal-reef" element={<HomePage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
