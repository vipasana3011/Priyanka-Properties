import { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNote(
      "Thank you for contacting Priyanka Properties. Our team will get in touch with you shortly."
    );

    e.target.reset();
    setTimeout(() => setNote(""), 5000);
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span
              className="eyebrow center"
              style={{ justifyContent: "center" }}
            >
              Contact
            </span>

            <h1>Let's Start a Conversation</h1>

            <p>
              Connect with Priyanka Properties for premium plots, villas,
              commercial spaces and real estate investment opportunities across
              Jaipur.
            </p>

            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              Contact
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container contact-grid">
          
          {/* Office Details */}
          <Reveal>
            <div>
              {/* Office 1 */}
              <div className="office-card glass">
                <h4>Office 1</h4>

                <div className="office-row">
                  <span>📍</span>
                  Shop No. 56, OD Block, Ring Rd, Near Vatika Road, Beelwa,
                  Sukhdeopura Nohara, Jaipur, Rajasthan 303905
                </div>

                <div className="office-row">
                  <span>📞</span>
                  +91 98285 60965
                </div>

                <div className="office-row">
                  <span>✉️</span>
                  priyankaxproperties@gmail.com
                </div>

                <div className="office-row">
                  <span>🗺️</span>
                  <a
                    href="https://maps.app.goo.gl/ryQJH1KAZ25dFxDKA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Office 2 */}
              <div className="office-card glass">
                <h4>Office 2</h4>

                <div className="office-row">
                  <span>📍</span>
                  Meena Chowk, Chanakyapuri, Chandlai Road, Vatika Rd,
                  Sanganer, Jaipur, Rajasthan 302022
                </div>

                <div className="office-row">
                  <span>📞</span>
                  +91 83858 30258
                </div>

                <div className="office-row">
                  <span>💬</span>
                  WhatsApp: +91 98285 60965
                </div>

                <div className="office-row">
                  <span>🗺️</span>
                  <a
                    href="https://maps.app.goo.gl/cbTVJZZWo3m5MVSj6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="map-wrap">
                <iframe
                  title="Priyanka Properties Location"
                  src="https://maps.google.com/maps?q=Shop%20No.%2056%20OD%20Block%20Ring%20Road%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.1}>
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "6px",
                }}
              >
                Send an Enquiry
              </h3>

              <p
                className="section-sub"
                style={{
                  marginBottom: "24px",
                }}
              >
                Fill in your details and we'll get back to you within 24 hours.
              </p>

              <div className="field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div
                className="grid-2"
                style={{
                  gap: "16px",
                }}
              >
                <div className="field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>Interested In</label>
                <input
                  type="text"
                  placeholder="e.g. JDA Plot, Villa, Commercial Property"
                />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea
                  placeholder="Tell us about your property requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-gold"
                style={{ width: "100%" }}
              >
                Submit Enquiry
              </button>

              {note && <div className="form-note">{note}</div>}

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  className="btn btn-ghost"
                  href="https://wa.me/919828560965"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://instagram.com/priyanka.properties"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}