import { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNote("Thank you! Our team will reach out to you shortly.");
    e.target.reset();
    setTimeout(() => setNote(""), 5000);
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>
              Contact
            </span>
            <h1>Let's Start a Conversation</h1>
            <p>
              Reach out for property enquiries, site visits or investment advice —
              we'd love to help.
            </p>
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span> Contact
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container contact-grid">
          {/* Offices + details */}
          <Reveal>
            <div>
              <div className="office-card glass">
                <h4>Head Office</h4>
                <div className="office-row"><span>📍</span> 201, Crystal Tower, C-Scheme, Jaipur, Rajasthan 302001</div>
                <div className="office-row"><span>📞</span> +91 99999 99999</div>
                <div className="office-row"><span>✉️</span> info@priyankaproperties.in</div>
              </div>

              <div className="office-card glass">
                <h4>Ring Road Branch</h4>
                <div className="office-row"><span>📍</span> Shop 12, Highway Plaza, Jaipur Ring Road, Jaipur 302026</div>
                <div className="office-row"><span>📞</span> +91 88888 88888</div>
                <div className="office-row"><span>💬</span> WhatsApp: +91 99999 99999</div>
              </div>

              <div className="map-wrap">
                <iframe
                  title="Priyanka Properties Location"
                  src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: 6 }}>Send an Enquiry</h3>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                Fill in your details and we'll get back to you within 24 hours.
              </p>

              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="grid-2" style={{ gap: 16 }}>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 ..." required />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="you@email.com" required />
                </div>
              </div>
              <div className="field">
                <label>Interested In</label>
                <input type="text" placeholder="e.g. JDA Plot, Villa, Commercial" />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea placeholder="Tell us what you're looking for..."></textarea>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: "100%" }}>
                Submit Enquiry
              </button>
              {note && <div className="form-note">{note}</div>}

              <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn-ghost" href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-ghost" href="https://instagram.com" target="_blank" rel="noreferrer">
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
