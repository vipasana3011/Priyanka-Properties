import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { expertise } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img src={logo} alt="Priyanka Properties" />

            <p>
              Priyanka Properties — your trusted partner for luxury real estate
              across Jaipur. JDA approved plots, Ring Road projects, villas,
              homes and premium investment opportunities.
            </p>

            <div className="socials">
              <a
                href="https://instagram.com/priyanka.properties"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IgIcon />
              </a>

              <a
                href="https://wa.me/919828560965"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WaIcon />
              </a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5>Expertise</h5>

            <ul>
              {expertise.slice(0, 6).map((e) => (
                <li key={e}>
                  <Link to="/services">{e}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Our Offices</h5>

            <ul>
              <li>
                <a
                  href="https://maps.app.goo.gl/ryQJH1KAZ25dFxDKA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Office 1 - Ring Road
                </a>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/cbTVJZZWo3m5MVSj6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Office 2 - Sanganer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Get in Touch</h5>

            <ul>
              <li>
                <a href="tel:+919828560965">
                  +91 98285 60965
                </a>
              </li>

              <li>
                <a href="tel:+918385830258">
                  +91 83858 30258
                </a>
              </li>

              <li>
                <a href="mailto:priyankaxproperties@gmail.com">
                  priyankaxproperties@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/919828560965"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/priyanka.properties"
                  target="_blank"
                  rel="noreferrer"
                >
                  @priyanka.properties
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Priyanka Properties. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function IgIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.6 3.1a9.3 9.3 0 0 0 4.4 4.6c1.7.7 2.4.7 3.3.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2 0-.1-.2-.2-.4-.3z" />
    </svg>
  );
}