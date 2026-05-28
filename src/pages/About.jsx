import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import interior2 from "../assets/interior2.jpg";
import society from "../assets/society.jpg";

export default function About() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>
              About Us
            </span>
            <h1>A Legacy Built on Trust</h1>
            <p>
              Priyanka Properties has been shaping Jaipur's premium real estate
              landscape with integrity, expertise and an eye for lasting value.
            </p>
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span> About
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company intro */}
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container about-split">
          <Reveal>
            <div className="about-img-wrap">
              <img src={interior2} alt="Premium interior" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">Jaipur's Premium Property Experts</h2>
            <p className="section-sub">
              For over a decade, Priyanka Properties has helped families and
              investors secure the right address across Jaipur. From JDA approved
              plots to luxury villas and high-yield commercial spaces, we offer a
              curated portfolio backed by honest, transparent advisory.
            </p>
            <p className="section-sub" style={{ marginTop: 16 }}>
              Our team understands the pulse of the city — its growth corridors,
              upcoming infrastructure and the neighbourhoods poised for the next
              wave of appreciation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Jaipur & Ring Road */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-split">
          <Reveal>
            <span className="eyebrow">The Jaipur Advantage</span>
            <h2 className="section-title">Ring Road: The Future of Investment</h2>
            <p className="section-sub">
              The Jaipur Ring Road has transformed connectivity around the city,
              opening up an entirely new belt of high-growth land and projects.
              Improved access, planned infrastructure and JDA development have made
              this corridor one of the most rewarding investment destinations in
              Rajasthan.
            </p>
            <ul className="bullet-list">
              <li><span>✦</span> Seamless connectivity to NH-8, NH-11 & NH-12</li>
              <li><span>✦</span> Rapidly appreciating JDA approved land parcels</li>
              <li><span>✦</span> Proximity to upcoming commercial & IT hubs</li>
              <li><span>✦</span> Ideal for both end-use and long-term investment</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-img-wrap">
              <img src={society} alt="Jaipur Ring Road projects" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="container" style={{ paddingBottom: 30 }}>
        <div className="stats-grid">
          <Counter to={15} suffix="+" label="Years Experience" />
          <Counter to={1200} suffix="+" label="Happy Families" />
          <Counter to={350} suffix="+" label="Properties Sold" />
          <Counter to={98} suffix="%" label="Client Satisfaction" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Our Promise</span>
              <h2 className="section-title">Mission &amp; Vision</h2>
            </div>
          </Reveal>
          <div className="grid-2" style={{ marginTop: 44 }}>
            <Reveal>
              <div className="mv-card glass">
                <h3>Our Mission</h3>
                <p>
                  To make luxury real estate accessible and transparent — guiding
                  every client toward properties that deliver lasting value,
                  comfort and pride of ownership.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mv-card glass">
                <h3>Our Vision</h3>
                <p>
                  To be Jaipur's most trusted name in premium real estate —
                  recognised for integrity, innovation and an unwavering
                  commitment to our clients' aspirations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 90 }}>
        <Reveal>
          <div className="cta-band">
            <h2>Let's Build Your Property Portfolio</h2>
            <p>Partner with a team that treats your investment like its own.</p>
            <Link to="/contact" className="btn btn-gold">Talk to an Expert</Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
