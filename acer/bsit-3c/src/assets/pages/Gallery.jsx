import "./Gallery.css";

const barbiePictures = [
  {
    image: "/images/barbie1.jpg",
    title: "Barbie Fashion",
    description: "A stylish Barbie fashion collection."
  },
  {
    image: "/images/barbie2.jpg",
    title: "Barbie Style",
    description: "Beautiful Barbie style and elegance."
  },
  {
    image: "/images/barbie3.jpg",
    title: "Barbie Dream",
    description: "A colorful Barbie dream world."
  },
  {
    image: "/images/barbie4.jpg",
    title: "Barbie Beauty",
    description: "A beautiful Barbie-inspired look."
  },
  {
    image: "/images/barbie5.jpg",
    title: "Barbie Pink",
    description: "A lovely pink Barbie theme."
  },
  {
    image: "/images/barbie6.jpg",
    title: "Barbie Glam",
    description: "Glamorous Barbie fashion and design."
  },
  {
    image: "/images/barbie7.jpg",
    title: "Barbie Dreamhouse",
    description: "A fun and colorful Barbie world."
  },
  {
    image: "/images/barbie8.jpg",
    title: "Barbie Collection",
    description: "One of the featured Barbie pictures."
  }
];

function Gallery() {
  return (
    <div className="gallery-page">

      <div className="container py-5">

        <div className="gallery-heading">
          <h1>Barbie Gallery</h1>

          <p>
            Explore our collection of eight beautiful Barbie pictures.
          </p>
        </div>

        <div className="row g-4">

          {barbiePictures.map((barbie, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>

              <div className="barbie-card">

                <div className="image-container">
                  <img
                    src={barbie.image}
                    alt={barbie.title}
                    className="barbie-image"
                  />
                </div>

                <div className="card-content">

                  <h5>{barbie.title}</h5>

                  <p>{barbie.description}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Gallery;