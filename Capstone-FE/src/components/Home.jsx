import { Container } from "react-bootstrap";
import CarouselHome from "./CarouselHome";
import ragazza from "../assets/img/Ragazza.png";

function Home() {
  return (
    <>
      <Container className="containerHome">
        <div className="d-flex justify-content-between">
          <div>
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
        <div className="mt-5 pt-3">
          <h3 className="text-center my-5">I migliori gamers usano le nostre attrezzature:</h3>
          <CarouselHome />
        </div>
        {/* <div className="text-center mt-5">
          <video src={video} width="1200" height="800" controls></video>
        </div> */}
      </Container>
    </>
  );
}
export default Home;
