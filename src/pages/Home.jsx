import { NavLink } from "react-router-dom";
import "./HACM.css";

export const Home = () => {
  return (
    <main>
      <section className="abc-section">
        <div className="abc-container">
          <img
            src="https://i.pinimg.com/736x/26/53/c1/2653c1c04f6c25ad4f046aecf2f22aa8.jpg"
            alt="Movie Theme"
            className="abc-image"
          />

          <div className="abc-text">
            <p className="abc-subheading">Explore the Latest in Movie Industries</p>
            <h1 className="abc-heading">Unlimited Movies, TV Shows, & More.</h1>
            <p className="abc-para">
              Discover the Top Best Movies and Dramas — Your Ultimate Guide to Must-Watch Content.
            </p>
            <div className="abc-btn">
              <NavLink to="/movie" className="abc-link">
                Explore Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
