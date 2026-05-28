import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import PropertyCard from "../components/PropertyCard";
import { properties, services, expertise } from "../data/content";
import hero from "../assets/hero.jpg";
import interior1 from "../assets/interior1.jpg";

const headline = "Turning Your Property Dreams Into Reality";

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src={hero} alt="Luxury Jaipur real estate" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Luxury Real Estate · Jaipur
          </motion.span>

          <h1>
            {headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block", marginRight: "0.28em" }}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={word === "Reality" ? "gradient-gold" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            JDA approved plots, Jaipur Ring Road projects, premium villas, homes
            and commercial spaces — curated by Priyanka Properties.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Link to="/projects" className="btn btn-gold">
              Explore Projects
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <span className="line" />
        </div>
      </section>

      {/* FLOATING STATS */}
      <section className="container floating-stats">
        <div className="stats-grid">
          <Counter to={15} suffix="+" label="Years Experience" />
          <Counter to={1200} suffix="+" label="Happy Families" />
          <Counter to={350} suffix="+" label="Properties Sold" />
          <Counter to={40} suffix="+" label="Active Projects" />
        </div>
      </section>

      {/* EXPERTISE STRIP */}
      <section className="section">
        <div className="container center">
          <Reveal>
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title">A Complete Property Partner</h2>
            <p className="section-sub">
              From land to keys — every step of your real estate journey under
              one trusted, premium roof.
            </p>
          </Reveal>

          <div className="grid-3" style={{ marginTop: 50, textAlign: "left" }}>
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="feature-card glass">
                  <div className="feature-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <div>
                <span className="eyebrow">Featured</span>
                <h2 className="section-title">Signature Properties</h2>
              </div>
              <Link to="/projects" className="btn btn-ghost">
                View All Projects
              </Link>
            </div>
          </Reveal>

          <div className="grid-3" style={{ marginTop: 44 }}>
            {properties.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SHOWCASE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-split">
          <Reveal>
            <div className="about-img-wrap">
              <img src={interior1} alt="Luxury interior" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Why Priyanka Properties</span>
            <h2 className="section-title">Where Trust Meets Luxury</h2>
            <p className="section-sub">
              We blend deep local knowledge of Jaipur's fastest-growing corridors
              with transparent, white-glove service — so every investment feels
              effortless and assured.
            </p>
            <ul className="bullet-list">
              {expertise.slice(0, 6).map((e) => (
                <li key={e}>
                  <span>✦</span> {e}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Link to="/about" className="btn btn-gold">
                Learn More About Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingBottom: 90 }}>
        <Reveal>
          <div className="cta-band">
            <h2>Ready to Find Your Dream Address?</h2>
            <p>
              Speak with our property experts today and discover opportunities
              along the Jaipur Ring Road and beyond.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Get a Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
