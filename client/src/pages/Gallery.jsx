import { useState, useEffect } from "react";
import { getGallery } from "../api";
import "./Gallery.css";
import SEO from "../components/SEO";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data } = await getGallery();
        setPhotos(data);
      } catch (error) {
        console.log("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredPhotos = photos.filter((photo) => {
    if (filter === "all") return true;
    return photo.category === filter;
  });

  return (
    <main className="gallery">
      <SEO
        title="Gallery"
        description="Photos from MmcfraNkcsoc Academy school visits and community activities across rural Ghana."
      />

      {/* HERO */}
      <section
        className="gallery-hero"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/djw6sbckx/image/upload/v1781361205/mmcfrankcsoc-academy/idgjnwjjziljfw7mdqxx.jpg)",
        }}
      >
        <div className="gallery-hero-overlay">
          <div className="container">
            <span className="section-label-light">Gallery</span>
            <h1>
              Our Work In <span>Pictures</span>
            </h1>
            <p>
              A visual journey through our school visits, team moments, and
              community impact across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            <button
              className={`filter-tab ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All ({photos.length})
            </button>
            <button
              className={`filter-tab ${filter === "field-visit" ? "active" : ""}`}
              onClick={() => setFilter("field-visit")}
            >
              Field Visits
            </button>
            <button
              className={`filter-tab ${filter === "team" ? "active" : ""}`}
              onClick={() => setFilter("team")}
            >
              Team
            </button>
            <button
              className={`filter-tab ${filter === "event" ? "active" : ""}`}
              onClick={() => setFilter("event")}
            >
              Events
            </button>
            <button
              className={`filter-tab ${filter === "other" ? "active" : ""}`}
              onClick={() => setFilter("other")}
            >
              Other
            </button>
          </div>

          {loading ? (
            <div className="gallery-loading">
              <span>⊕</span>
              <p>Loading gallery...</p>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="gallery-empty">
              <span>⊕</span>
              <h2>No Photos Yet</h2>
              <p>Check back soon for photos from our school visits.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredPhotos.map((photo) => (
                <div
                  className="gallery-item"
                  key={photo._id}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img src={photo.photoUrl} alt={photo.title} />
                  <div className="gallery-item-overlay">
                    <p>{photo.title}</p>
                    <span>{photo.category.replace("-", " ")}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
            <img src={selectedPhoto.photoUrl} alt={selectedPhoto.title} />
            <div className="lightbox-info">
              <h3>{selectedPhoto.title}</h3>
              <span>{selectedPhoto.category.replace("-", " ")}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
