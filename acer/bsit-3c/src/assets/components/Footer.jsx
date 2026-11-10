import {
  FaGithub,
  FaXTwitter,
  FaLinkedin
} from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row footer-main">

          {/* LOCATION */}
          <div className="col-md-4 footer-column">

            <h4>Xyra's World</h4>

            <p>+639-123-456-789</p>

            <p>Dirdirg, Burgos</p>

            <p>Ilocos Sur</p>

          </div>


          {/* SECTION */}
          <div className="col-md-4 footer-column">

            <h4>SECTION</h4>

            <a href="/">Home</a>

            <a href="/gallery">Features</a>

            <a href="/gallery">Pricing</a>

            <a href="/contact">FAQs</a>

            <a href="/contact">About</a>

          </div>


          {/* SOCIAL */}
          <div className="col-md-4 footer-column">

            <h4>Contact Us</h4>

            <div className="footer-social">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="footer-bottom">

          <p>
            ©2026 RAIZA NAVARRO | All right reserved |
            Terms of Services | Privacy
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;