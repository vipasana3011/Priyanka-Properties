import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

import hero from "../assets/hero.jpg";
import plots from "../assets/plots.jpg";
import commercial from "../assets/commercial.jpg";
import villa from "../assets/villa.jpg";
import home from "../assets/home.jpg";
import society from "../assets/society.jpg";
import interior1 from "../assets/interior1.jpg";
import interior2 from "../assets/interior2.jpg";

const gallery = [
  { src: villa, label: "Signature Villa" },
  { src: interior1, label: "Living Spaces" },
  { src: society, label: "Society Project" },
  { src: commercial, label: "Commercial Tower" },
  { src: interior2, label: "Master Suite" },
  { src: plots, label: "JDA Plots" },
  { src: home, label: "Family Home" },
  { src: hero, label: "Premium Towers" },
];

export default function Gallery() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>
              Gallery
            </span>
            <h1>Moments of Luxury</h1>
            <p>
              A glimpse into the premium properties, interiors and projects that
              define Priyanka Properties.
            </p>
            <div className="crumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span> Gallery
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="masonry">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="masonry-item" data-label={g.label}>
                  <img src={g.src} alt={g.label} loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 90 }}>
        <Reveal>
          <div className="cta-band">
            <h2>See It in Person</h2>
            <p>Schedule a private site visit with our team today.</p>
            <Link to="/contact" className="btn btn-gold">Schedule a Visit</Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
