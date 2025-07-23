import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Welcome message */}
        <div className="footer-column">
          <p>Welcome to Gour EcomStore, your ultimate destination for cutting-edge gadgets!</p>
        </div>

        {/* Bottom 3 columns */}
        <div className="footer-columns-row">
          {/* Column 2: Shopping */}
          <div className="footer-column">
            <h3>SHOPPING</h3>
            <ul>
              <li><NavLink to="/computer">Computer Store</NavLink></li>
              <li><NavLink to="/laptops">Laptop Store</NavLink></li>
              <li><NavLink to="/accessories">Accessories</NavLink></li>
              <li><NavLink to="/sales">Sales & Discount</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Experience */}
          <div className="footer-column">
            <h3>Experience</h3>
            <ul>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/payment">Payment Method</NavLink></li>
              <li><NavLink to="/delivery">Delivery</NavLink></li>
              <li><NavLink to="/returns">Return and Exchange</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-column">
            <h3>NEWSLETTER</h3>
            <p>Be the first to know about new arrivals, sales & promos!</p>
            <input type="email" placeholder="Your Email" className="newsletter-input" />
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="footer-bottom">
        <p>Design and Code by Gour Technical</p>
      </div>
    </footer>
  );
};
