import Carousel from "react-bootstrap/Carousel";
import pow3r from "../assets/img/Pow3r.png";
import mouseFnatic from "../assets/img/Mouse.png";
import ninja from "../assets/img/Ninja.webp";
import controllerPs5 from "../assets/img/Contreoller-PS5.webp";
import controllerScuff from "../assets/img/Controller.png";
import tfue from "../assets/img/Tfue.webp";
import tastieraFnatic from "../assets/img/Tastiera.png";
import tasieraLogi from "../assets/img/Tastiera-logi.jpeg";

function CarouselHome() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="p-5 sfondo">
          <div className="d-flex">
            <img src={mouseFnatic} className="d-block w-100" alt="Sfondo" />
            <img src={pow3r} alt="Sfondo" width="300px" />
            <img src={mouseFnatic} className="d-block w-100" alt="Sfondo" />
          </div>
          <Carousel.Caption>
            <h3>POW3R</h3>
            <p>"Questo mouse ha una velocità di reazione spaventosa e una sensibilità formidabile!"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sfondo">
          <div className="d-flex">
            <img src={controllerScuff} className="d-block w-100" alt="Sfondo" />
            <img src={ninja} alt="Sfondo" width="100%" />
            <img src={controllerPs5} className="d-block w-100" alt="Sfondo" />
          </div>
          <Carousel.Caption>
            <h3>NINJA</h3>
            <p>"Non sono un amante dei controller, ma questi due sono eccezionali e fidatevi dovete provarli!"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="p-3 sfondo">
          <div className="d-flex">
            <img src={tastieraFnatic} className="d-block" alt="Sfondo" width="70%" />
            <img src={tfue} alt="Sfondo" width="400px" />
            <img src={tasieraLogi} className="d-block" alt="Sfondo" width="60%" />
          </div>
          <Carousel.Caption>
            <h3>TFUE</h3>
            <p>
              "La velocità con cui reagiscono tutti i stati e la loro fluidità, ti permettono di migliorare le tue
              prestazioni!"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHome;
