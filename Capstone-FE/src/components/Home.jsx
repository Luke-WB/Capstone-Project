import { Container } from "react-bootstrap";
import CarouselHome from "./CarouselHome";
import ragazza from "../assets/img/Ragazza.png";
import logoFnatic from "../assets/img/logo Fnatic.png";
import logoLogi from "../assets/img/Logo Logitech.png";
import logoPs from "../assets/img/Logo PS.jpg";

function Home() {
  return (
    <>
      <Container className="containerHome">
        <div className="d-flex justify-content-between my-5">
          <div className="">
            <h1 className="mb-5">FUTURE GAMING</h1>
            <p className="me-5">
              Benvenuti gamers, questo è il posto giusto per trovare quello che state cercando! Tutta l'attrezzatura,
              che vi serve per migliorare le vostre prestazioni e aumentare la vostra voglia di gioco, si trova qui.
              Guardate la nostra nuova collezione e scegliete con cura!
            </p>
          </div>
          <div className="immagine">
            <img src={ragazza} alt="Ragazza" />
          </div>
        </div>
        <h3 className="text-center mb-5">I migliori gamers usano le nostre attrezzature:</h3>
        <CarouselHome />
      </Container>
      <div className="partner text-center my-5 p-5">
        <h2 className="mb-5">PARTNERSHIP</h2>
        <img className="mx-5" src={logoFnatic} alt="Logo Fnatic" width="400px" />
        <img className="mx-5" src={logoLogi} alt="Logo Logitech" width="400px" />
        <img className="mx-5" src={logoPs} alt="Logo PS" width="400px" />
      </div>
    </>
  );
}
export default Home;
