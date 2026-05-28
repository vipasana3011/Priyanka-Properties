import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>
              What We Do
            </span>
            <h1>Premium Real Estate Services</h1>
            <p>
              End-to-end solutions for buying, selling, building and investing —
              delivered with a luxury, white-glove experience.
            </p>
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span> Services
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="feature-card glass">
                  <div className="feature-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link
                    to="/contact"
                    className="explore-link"
                    style={{ marginTop: 18, display: "inline-flex" }}
                  >
                    Enquire
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">How It Works</span>
              <h2 className="section-title">A Seamless Journey</h2>
            </div>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 44 }}>
            {[
              { n: "01", t: "Consult", d: "We understand your goals, budget and timeline in a personal session." },
              { n: "02", t: "Curate", d: "We shortlist verified, best-fit properties tailored to your needs." },
              { n: "03", t: "Close", d: "We handle paperwork, approvals and handover — completely stress-free." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="feature-card glass">
                  <div className="stat-num" style={{ fontSize: "2rem" }}>{step.n}</div>
                  <h3 style={{ marginTop: 8 }}>{step.t}</h3>
                  <p>{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 90 }}>
        <Reveal>
          <div className="cta-band">
            <h2>Need Expert Guidance?</h2>
            <p>Our advisors are ready to help you make the right move.</p>
            <Link to="/contact" className="btn btn-gold">Book a Consultation</Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
