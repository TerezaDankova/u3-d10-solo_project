import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CitySelected from './components/CitySelected';
import MyNavbar from './components/MyNavbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
    <BrowserRouter>
      <MyNavbar title="WEATHER APP" />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citySelected" element={<CitySelected />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;