function Gallery() {
  return (
    <section className="generalContainer">
      <div className="generalBackground galleryBackground">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-flex">
          <div className="galleryCard" id="galleryCard_1">
            <img className="galleryImage img1" src={require("../img/image.png")} alt="Gallery"></img>
            <div className="galleryDescription">Gallery description to complete</div>
          </div>
          <div className="galleryCard" id="galleryCard_2">
            <img className="galleryImage img2" src={require("../img/image.png")} alt="Gallery"></img>
            <div className="galleryDescription">Gallery description to complete</div>
          </div>
          <div className="galleryCard" id="galleryCard_3">
            <img className="galleryImage img3" src={require("../img/image.png")} alt="Gallery"></img>
            <div className="galleryDescription">Gallery description to complete</div>
          </div>
          <div className="galleryCard" id="galleryCard_4">
            <img className="galleryImage img4" src={require("../img/image.png")} alt="Gallery"></img>
            <div className="galleryDescription">Gallery description to complete</div>
          </div>
          <div className="galleryCard" id="galleryCard_5">
            <img className="galleryImage img5" src={require("../img/image.png")} alt="Gallery"></img>
            <div className="galleryDescription">Gallery description to complete</div>
          </div>
          <div className="galleryCard" id="galleryCard_6">
            <img className="galleryImage img6" src={require("../img/image.png")} alt="Gallery"></img>
            <div className="galleryDescription">Gallery description to complete</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
