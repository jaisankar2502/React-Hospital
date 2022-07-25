import React from 'react';
import './gallery.css';

function Gallery() {
  return (
    <div className='galleryhome'> 
    <div className="container gallery ">
      <div className="section-title uderline ">
        <h2>Gallery</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    </div>
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="#" className="galelry-lightbox">
              <img src="assetes/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
        </div>  

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-5.jpg" alt="" className="img-fluid "/>
                </a>
              </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
        </div>

        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href="#" className="galelry-lightbox">
                  <img src="assetes/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Gallery
