import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./components/NavCustom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Carrello from "./components/Carrello";
import Registrazione from "./components/Registrazione";
import Login from "./components/Login";
import Articoli from "./components/Articoli";
import Ordine from "./components/Ordine";
import OrdineConfermato from "./components/OrdineConfermato";
import User from "./components/User";
import Ordini from "./components/Ordini";
import PartnerShip from "./components/PartnerShip";

function App() {
  return (
    <>
      <NavCustom />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articoli" element={<Articoli />} />
          <Route path="/partnership" element={<PartnerShip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrazione" element={<Registrazione />} />
          <Route path="/carrello" element={<Carrello />} />
          <Route path="/ordine" element={<Ordine />} />
          <Route path="/ordine-confermato" element={<OrdineConfermato />} />
          <Route path="/profilo" element={<User />} />
          <Route path="/ordini" element={<Ordini />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
