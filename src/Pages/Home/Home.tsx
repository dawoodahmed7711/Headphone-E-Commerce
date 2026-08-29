import { ArrowUpRight } from "lucide-react";
import { FiHeart } from "react-icons/fi";
import "./home.css";
import Headphone from '../../assets/headphone.png'
import Product1 from  '../../assets/product1.jpg'
import Product2 from  '../../assets/product2.jpg'
import Product3 from  '../../assets/product3.jpg'
import Product4 from  '../../assets/product4.jpg'
import Product5 from  '../../assets/product5.jpg'
import Product6 from  '../../assets/product6.jpg'
import Product7 from  '../../assets/product7.jpg'
import Product8 from  '../../assets/product8.jpg'
import { SystemContext } from "../../Context.tsx";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { toast } from "react-toastify";


const products = [
  {
    id: 1,
    badge: "Best Seller",
    name: "Navy Blue",
    tagline: "Hear every detail",
    description: "Immersive sound with deep bass, crystal-clear highs, and rich dynamic tones.",
    price: 99.99,
    image: Product1,
  },
  {
    id: 2,
    badge: "New",
    name: "Red Velvet",
    tagline: "Track every beat",
    description: "Precision health tracking with a battery that keeps up for a full week.",
    price: 149.00,
    image: Product2,
  },
  {
    id: 3,
    badge: "Best Seller",
    name: "Forest Green",
    tagline: "Big sound, small frame",
    description: "Portable speaker with 360° audio and 18 hours of playback on a single charge.",
    price: 79.50,
    image: Product3,
  },
  {
    id: 4,
    badge: "Limited",
    name: "Vibrant Orange",
    tagline: "Own the silence",
    description: "Active noise cancelling earbuds built for focus, calls, and everyday commutes.",
    price: 59.00,
    image: Product4,
  },
  {
    id: 5,
    badge: "New",
    name: "Soft Pink ",
    tagline: "Capture the moment",
    description: "Compact mirrorless camera with a fast sensor for sharp, low-light shots.",
    price:389.00,
    image: Product5,
  },
  {
    id: 6,
    badge: "Best Seller",
    name: "Lavender ",
    tagline: "Type with intent",
    description: "Hot-swappable mechanical keyboard tuned for a soft, satisfying keystroke.",
    price: 129.00,
    image: Product6,
  },
  {
    id: 7,
    badge: "Limited",
    name: "Mate Black ",
    tagline: "See it from above",
    description: "Foldable drone with 4K stabilised footage and a 30-minute flight time.",
    price:249.00,
    image: Product7,
  },
  {
    id: 8,
    badge: "New",
    name: " Golden Yellow",
    tagline: "Move without friction",
    description: "Ultra-light wireless mouse with a silent click and all-day battery life.",
    price: 45.00,
    image: Product8,
  },
];

function Home() {

  const {ShowDetails ,  AddtoFavourite} = useContext(SystemContext) as any
  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__rings" aria-hidden="true" />

        <div className="hero__text" aria-hidden="true">
          <span className="hero__text-line hero__text-line--top">Driven</span>
          <span className="hero__text-line hero__text-line--outline">By</span>
          <span className="hero__text-line hero__text-line--bottom">Sound</span>
        </div>

        <img
          className="hero__product"
          src={Headphone}
          alt="SonicWave over-ear headphones"
        />
      </section>

      {/* ---------- Products intro ---------- */}
      <section className="products-intro">
        <h2 className="products-intro__eyebrow">Our Products</h2>
        <p className="products-intro__paragraph">
          A curated edit of everyday electronics, built with clean design and
          dependable performance so your routine runs a little smoother.
        </p>
      </section>

      {/* ---------- Product grid: data, map, and card markup all here ---------- */}
      <section className="products-grid" aria-label="Product listing">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card__media">
              <img src={product.image} alt={product.name} loading="lazy" />
              <span className="product-card__badge">{product.badge}</span>
              <button onClick={()=>(AddtoFavourite(product)  ,toast.success('Added to Favourite'))} className="product-card__brand" aria-hidden="true">
                <FiHeart/>
              </button>
              <div className="product-card__dots">
                <span className="is-active" />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="product-card__body">
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__tagline">{product.tagline}</p>
              <p className="product-card__description">{product.description}</p>

              <div className="product-card__footer">
                <span className="product-card__price">${product.price}</span>
                <NavLink to='/details' onClick={()=>ShowDetails(product)} className="product-card__buy" type="button">
                  Buy Now
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </NavLink>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;