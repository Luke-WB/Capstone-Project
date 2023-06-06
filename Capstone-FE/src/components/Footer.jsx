import logoFuture from "../assets/img/Logo principale - white.png";
import { BsInstagram, BsDiscord, BsTwitch } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

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
        <div className="d-flex justify-content-evenly ">
          <a href="/instagram">
            <p className="d-flex align-items-center ">
              <BsInstagram className="text-white me-2" />| Instagram
            </p>
          </a>
          <a href="/you-tube">
            <p className="d-flex align-items-center ">
              <FaYoutube className="text-white me-2" />| You-Tube
            </p>
          </a>
          <a href="/discord">
            <p className="d-flex align-items-center ">
              <BsDiscord className="text-white me-2" />| Discord
            </p>
          </a>
          <a href="/twitch">
            <p className="d-flex align-items-center ">
              <BsTwitch className="text-white me-2" />| Twitch
            </p>
          </a>
        </div>
      </div>
      <p className="mt-5">
        <a href="https://commission.europa.eu/legal-notice_en" className="mx-4">
          Legal Stuff
        </a>
        |
        <a href="https://commission.europa.eu/privacy-policy-websites-managed-european-commission_en" className="mx-4">
          Privacy Policy
        </a>
        |
        <a
          href="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/search-all-eu-institutions-and-bodies/european-union-institute-security-studies-euiss_it"
          className="mx-4"
        >
          Security
        </a>
      </p>
    </div>
  );
}

export default Footer;
