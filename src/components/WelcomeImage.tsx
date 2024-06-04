function WelcomeImage() {
  return (
    <>
      <div id="myCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/20230225_130625.jpg"
              className="d-block w-100 rounded scaled-image"
              alt="My Doggies"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="/estes park.jpg"
              className="d-block w-100 rounded scaled-image"
              alt="Hiking at Estes Park"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="/me with sweater.jpg"
              className="d-block w-100 rounded scaled-image"
              alt="Me in my knitted sweater"
            ></img>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          data-bs-target="#myCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#myCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default WelcomeImage;
