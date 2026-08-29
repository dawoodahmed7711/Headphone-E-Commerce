import { FiChevronRight, FiTrash2 } from 'react-icons/fi';
import './liked.css';
import { SystemContext } from '../../Context.tsx';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
// ---------- Dummy favorites data ----------
// Replace each "image" value with your own imported product image,
// e.g. import Vase from './assets/vase.png' then image: Vase
const favoriteItems = [
  {
    id: 1,
    name: 'Ceramic Minimal Vase',
    category: 'Home Decor',
    variant: 'Color: White • Size: Medium',
    price: 145.0,
    image: '',
  },
  {
    id: 2,
    name: 'Matte Desk Luminaire',
    category: 'Lighting',
    variant: 'Color: Black • Material: Aluminum',
    price: 210.0,
    image: '',
  },
  {
    id: 3,
    name: 'Linen Woven Throw',
    category: 'Textiles',
    variant: 'Color: Beige • Size: 50x60"',
    price: 85.0,
    image: '',
  },
  {
    id: 4,
    name: 'Stoneware Cup Set',
    category: 'Kitchenware',
    variant: 'Color: Charcoal • Set of 3',
    price: 60.0,
    image: '',
  },
];

function Favorites() {
    const navigate = useNavigate()
    const {Favoutite ,  setFavourite ,  setCart} = useContext(SystemContext)
    const  removeItem = (id:number)=>{
       setFavourite(prev => prev.filter(item => item.id !== id));
       toast.error('Removed from Favourites')
     };
    function favtocart(){
        setCart(Favoutite)
        toast.success('Added to Cart')
    }
  return (
    <section className="fav-section">
      <div className="fav-breadcrumb">
        <span>Home</span>
        <FiChevronRight className="fav-breadcrumb-icon" />
        <span className="fav-breadcrumb-active">Favorites</span>
      </div>

      <div className="fav-header">
        <h1 className="fav-title">My Favorites</h1>
        <span className="fav-item-count">{Favoutite.length} items</span>
      </div>

      <div className="fav-list">
        {Favoutite.map((item:any) => (
          <div className="fav-card" key={item.id}>
            <div className="fav-card-image">
              <img src={item.image} alt={item.name} className="fav-card-image-tag" />
            </div>

            <div className="fav-card-body">
              <div className="fav-card-top">
                <div>
                  <div className="fav-card-name">{item.name}</div>
                  <div className="fav-card-category">{item.badge}</div>
                  <div className="fav-card-variant">{item.tagline}</div>
                </div>
                <div className="fav-card-price">${item.price.toFixed(2)}</div>
              </div>

              <div className="fav-card-bottom">
                <button onClick={()=>(favtocart(item) ,  navigate('/cart'))} className="fav-add-btn">Add to Cart</button>
                <button onClick={()=>removeItem(item.id)} className="fav-delete-btn" aria-label="Remove from favorites">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Favorites;