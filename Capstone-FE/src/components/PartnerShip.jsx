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
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="my-5 d-flex justify-content-around align-items-center w-100">
            <a href="https://fnatic.com/">
              <img className="mx-5 my-5" src={logoFnatic} alt="Logo Fnatic" width="400px" />
            </a>
            <a href="https://www.logitechg.com/it-it">
              <img className="mx-5 my-5" src={logoLogi} alt="Logo Logitech" width="400px" />
            </a>
            <a href="https://www.playstation.com/it-it/">
              <img className="mx-5 my-5" src={logoPs} alt="Logo PS" width="400px" />
            </a>
          </div>
          <div className="my-5 d-flex justify-content-around align-items-center w-100">
            <a href="https://www.nvidia.com/it-it/">
              <img className="mx-5" src={logoNvidia} alt="Logo Fnatic" width="250px" />
            </a>
            <a href="https://www.asus.com/it/store/?gclid=CjwKCAjw1YCkBhAOEiwA5aN4Abc3DXCBYkBCV35-6boNJ_RGkfHPoM-Vtjfd-9iTl99T2enSRwDA5BoC0XcQAvD_BwE">
              <img className="mx-5" src={logoAsus} alt="Logo Logitech" width="300px" />
            </a>
            <a href="https://www.coolermaster.com/">
              <img className="mx-5" src={logoCool} alt="Logo PS" width="300px" />
            </a>
          </div>
          <div className="my-5 d-flex justify-content-around align-items-center w-100">
            <a href="https://www.xbox.com/it-IT">
              <img className="mx-5" src={logoXbox} alt="Logo Fnatic" width="300px" />
            </a>
            <a href="https://www.shure.com/it-IT">
              <img className="mx-5" src={logoShure} alt="Logo Logitech" width="300px" />
            </a>
            <a href="https://scufgaming.com/it/playstation5-scuf-reflex?gclid=CjwKCAjw1YCkBhAOEiwA5aN4AQxq3bUMBT23pUI8q9FYB6VfPHD7ao7T7afbcZ6Sv5L0BK-sjm1oGxoCRUcQAvD_BwE">
              <img className="mx-5" src={logoScuf} alt="Logo PS" width="400px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerShip;
