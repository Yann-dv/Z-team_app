import InstaLogo from '../img/insta.jpg';

function Gallery() {
  return (
    <section className="generalContainer">
      <div className="generalBackground galleryBackground">
        <div className="smooth-show">
        <h2 className="section-title">Gallerie</h2>
        <div className="gallery-flex">
        <div >
        <a
          href="https://www.instagram.com/zteambjj/?hl=fr"
          rel="noreferrer"
          target="_blank"
          title="Lien vers Instagram"
        >
          <div className='instagramGalleryLink'>
            <img
              src={InstaLogo}
              alt="Lien vers notre gallerie instagram"
            />
          </div>
        </a>
      </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
