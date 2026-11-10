import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <div className="barbie-symbol">
            🎀
          </div>

          <h1>Welcome to My Barbie World</h1>

          <p>
            Explore a beautiful collection of Barbie pictures,
            creativity, fashion, and style.
          </p>

          <a href="/gallery" className="hero-button">
            Explore Gallery
          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;