import { locationContent } from "../data/location";
import "./Location.css";

function Location() {
  return (
    <section className="location" id="localizacao">
      <div className="location-inner">
        <div className="location-copy">
          <p className="eyebrow">{locationContent.eyebrow}</p>

          <h2>{locationContent.title}</h2>

          <p className="location-description">
            {locationContent.description}
          </p>

          <p className="location-address">{locationContent.address}</p>

          <a
            className="location-link"
            href={locationContent.directionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {locationContent.directionsLabel}
          </a>
        </div>

        <div className="map-frame">
          <iframe
            title="Mapa de localização"
            src={locationContent.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;