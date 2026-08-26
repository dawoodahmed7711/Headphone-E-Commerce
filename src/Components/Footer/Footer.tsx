import { FiInstagram , FiTwitter , FiFacebook , FiYoutube } from "react-icons/fi";
import "./Footer.css";

const LINK_GROUPS = [
  {
    title: "Shop",
    links: ["New Arrivals", "Best Sellers", "Audio", "Wearables", "Accessories"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Shipping & Returns", "Warranty", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 2c1.8 4 2.8 7 2.8 10.2 0 1.7-.4 3.2-1.1 4.6 3-2.3 5.4-4 8.6-5 3.5-1.1 6.2-.7 8.7.6-1.6 2.4-3.7 4-7.1 5.1-3 1-5.7.9-8.6-.1 2.6 1.9 4.3 4.2 5.6 7.3 1.4 3.3 1.3 6.1.2 9-2.6-1.4-4.4-3.3-5.7-6.5-1.1-2.9-1.1-5.6-.1-8.6-1.9 2.6-4.2 4.3-7.3 5.6-3.3 1.4-6.1 1.3-9 .2 1.4-2.6 3.3-4.4 6.5-5.7 2.9-1.1 5.6-1.1 8.6-.1-2.6-1.9-4.3-4.2-5.6-7.3-1.4-3.3-1.3-6.1-.2-9 2.6 1.4 4.4 3.3 5.7 6.5 1.1 2.9 1.1 5.6.1 8.6C22.8 13 21.9 8.6 20 2z" />
              </svg>
            </span>
            Veluno
          </a>
          <p className="footer__tagline">
            Modern electronics designed for comfort, style, and everyday
            performance.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram"><FiInstagram size={17} strokeWidth={1.8} /></a>
            <a href="#" aria-label="Twitter"><FiTwitter size={17} strokeWidth={1.8} /></a>
            <a href="#" aria-label="Facebook"><FiFacebook size={17} strokeWidth={1.8} /></a>
            <a href="#" aria-label="YouTube"><FiYoutube size={17} strokeWidth={1.8} /></a>
          </div>
        </div>

        <div className="footer__links">
          {LINK_GROUPS.map((group) => (
            <div className="footer__link-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__newsletter">
          <h4>Stay in the loop</h4>
          <p>Get product drops and offers straight to your inbox.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" required />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Veluno. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
