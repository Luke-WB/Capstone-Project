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

function App() {
  return (
    <>
      <NavCustom />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articoli" element={<Articoli />} />
          <Route path="/carrello" element={<Carrello />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrazione" element={<Registrazione />} />
          <Route path="/ordine" element={<Ordine />} />
          <Route path="/fattura" element={<OrdineConfermato />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
