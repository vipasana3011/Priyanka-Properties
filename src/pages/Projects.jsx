import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/content";

export default function Projects() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>
              Our Portfolio
            </span>
            <h1>Luxury Projects &amp; Properties</h1>
            <p>
              Explore a curated selection of JDA plots, commercial spaces, villas,
              homes and society projects across Jaipur.
            </p>
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span> Projects
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="grid-3">
            {properties.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 90 }}>
        <Reveal>
          <div className="cta-band">
            <h2>Looking for Something Specific?</h2>
            <p>
              Tell us your budget and preferred location — we'll match you with
              the perfect property.
            </p>
            <Link to="/contact" className="btn btn-gold">Enquire Now</Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
