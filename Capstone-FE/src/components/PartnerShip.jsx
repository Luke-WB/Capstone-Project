import logoFnatic from "../assets/img/Logo Fnatic.png";
import logoLogi from "../assets/img/Logo Logitech.png";
import logoPs from "../assets/img/Logo PS.jpg";
import logoXbox from "../assets/img/Logo - Xbox.png";
import logoNvidia from "../assets/img/Logo - Nvidia.png";
import logoAsus from "../assets/img/Logo - Asus.png";
import logoCool from "../assets/img/Logo - Cooler Master.png";
import logoShure from "../assets/img/Logo - Shure.png";
import logoScuf from "../assets/img/Logo - Scuf.png";

function PartnerShip() {
  return (
    <>
      <div className="partner text-center">
        <h1 className="my-5 fw-bold">PARTNERSHIP</h1>
        <div className="my-5">
          <img className="mx-5 my-5" src={logoFnatic} alt="Logo Fnatic" width="400px" />
          <img className="mx-5 my-5" src={logoLogi} alt="Logo Logitech" width="400px" />
          <img className="mx-5 my-5" src={logoPs} alt="Logo PS" width="400px" />
        </div>
        <div className="my-5">
          <img className="mx-5" src={logoNvidia} alt="Logo Fnatic" width="300px" />
          <img className="mx-5" src={logoAsus} alt="Logo Logitech" width="300px" />
          <img className="mx-5" src={logoCool} alt="Logo PS" width="300px" />
        </div>
        <div className="my-5">
          <img className="mx-5" src={logoXbox} alt="Logo Fnatic" width="300px" />
          <img className="mx-5" src={logoShure} alt="Logo Logitech" width="300px" />
          <img className="mx-5" src={logoScuf} alt="Logo PS" width="400px" />
        </div>
      </div>
    </>
  );
}

export default PartnerShip;
