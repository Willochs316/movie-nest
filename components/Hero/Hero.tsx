import "./styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content--text">
          <h1>Welcome!</h1>
          <h3>
            Discover and explore recent and trending Movies &amp; TV Shows
          </h3>
        </div>

        <form action="" className="form">
          <div className="form__content">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search..."
              className="form__input-field"
            />

            <button type="submit" className="form__btn">
              Show Me!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
