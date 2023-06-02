import logoFuture from "../assets/img/Logo.png";
import { BsInstagram, BsDiscord, BsTwitch } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <h3>
        <img src={logoFuture} alt="Logo" width="50" />
        FUTURE GAMING
      </h3>
      <p>Copyright &copy; 2023 Future Gaming</p>
      <p id="telefono">
        <i className="bi bi-telephone-fill"></i> 011545729
      </p>
      <div className="contatti">
        <h5 className="my-4">SOCIAL</h5>
        <div className="d-flex justify-content-evenly">
          <a href="/instagram">
            <BsInstagram className="text-white" /> | Instagram
          </a>
          <a href="/facebook">
            <FaFacebookSquare /> | Facebook
          </a>
          <a href="/discord">
            <BsDiscord /> | Discord
          </a>
          <a href="/twitch">
            <BsTwitch /> | Twitch
          </a>
        </div>
      </div>
      <p className="mt-5">
        <a href="https://commission.europa.eu/legal-notice_en" className="mx-4">
          Legal Stuff
        </a>
        |
        <a href="https://termly.io/faq/what-is-a-privacy-policy-url/" className="mx-4">
          Privacy Policy
        </a>
        |
        <a href="https://www.psafe.com/dfndr-lab/" className="mx-4">
          Security
        </a>
      </p>
    </div>
  );
}

export default Footer;
