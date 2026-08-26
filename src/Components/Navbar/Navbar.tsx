import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX , FiHome, FiUser } from "react-icons/fi";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import home from "../../Pages/Home/Home.tsx";
import Cart from "../../Pages/Cart/Cart.tsx";
import Order from "../../Pages/Order/Order.tsx";
const NAV_LINKS = [""];

export default function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  


  function toCart():void{
    navigate('./Cart')
    console.log('cart')
  }
  function toOrder(){
    navigate('/order')
  }
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/home" className="navbar__logo" aria-label="Veluno home">
          <span className="navbar__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 2c1.8 4 2.8 7 2.8 10.2 0 1.7-.4 3.2-1.1 4.6 3-2.3 5.4-4 8.6-5 3.5-1.1 6.2-.7 8.7.6-1.6 2.4-3.7 4-7.1 5.1-3 1-5.7.9-8.6-.1 2.6 1.9 4.3 4.2 5.6 7.3 1.4 3.3 1.3 6.1.2 9-2.6-1.4-4.4-3.3-5.7-6.5-1.1-2.9-1.1-5.6-.1-8.6-1.9 2.6-4.2 4.3-7.3 5.6-3.3 1.4-6.1 1.3-9 .2 1.4-2.6 3.3-4.4 6.5-5.7 2.9-1.1 5.6-1.1 8.6-.1-2.6-1.9-4.3-4.2-5.6-7.3-1.4-3.3-1.3-6.1-.2-9 2.6 1.4 4.4 3.3 5.7 6.5 1.1 2.9 1.1 5.6.1 8.6C22.8 13 21.9 8.6 20 2z" />
            </svg>
          </span>
          <span className="navbar__logo-text">Veluno</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link} to='/home' className="navbar__link">
              {link}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="navbar__search">
            <FiSearch size={16} className="navbar__search-icon" />
            <input type="text" placeholder="Search" aria-label="Search" />
          </div>

          <button className="navbar__icon-btn" aria-label="Wishlist">
            <FiHeart size={19} />
          </button>

          <button  onClick={toCart} className="navbar__icon-btn" aria-label="Cart">
            <FiShoppingCart/>
          </button>

          <button onClick={toOrder} className="navbar__avatar" >
            <FiUser/>
          </button>

          <button
            className="navbar__menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}