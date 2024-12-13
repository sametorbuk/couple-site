const PhotoGallery = () => {
  return (
    <section className="photo-gallery">
      <div className="gallery-grid">
        <div className="main-photo">
          <img src="/images/4.jpeg" alt="Çift Fotoğrafı" />
        </div>

        <div className="photo-grid">
          <div className="photo-item">
            <img src="/images/1.jpeg" alt="Romantik Anlar" />
          </div>
          <div className="photo-item">
            <img src="/images/2.jpeg" alt="Mutlu Anlar" />
          </div>
          <div className="quote-container">
            <blockquote>
              "Seni sevmeme izin verdiğin ve karşılığında beni sevdiğin için
              teşekkür ederim."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
