import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <div className="property-media">
        <img src={property.image} alt={property.title} loading="lazy" />
        <span className="property-tag">{property.tag}</span>
      </div>
      <div className="property-body">
        <h3>{property.title}</h3>
        <div className="property-loc">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {property.location}
        </div>
        <div className="property-foot">
          <div className="property-price">
            <small>Starting</small>
            <strong>{property.price}</strong>
          </div>
          <Link to="/contact" className="explore-link">
            Explore
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
