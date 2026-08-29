import { FiChevronRight, FiTrash2 } from 'react-icons/fi';
import './liked.css';
import { SystemContext } from '../../Context.tsx';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
// ---------- Dummy favorites data ----------
// Replace each "image" value with your own imported product image,
// e.g. import Vase from './assets/vase.png' then image: Vase

function Favorites() {
    const navigate = useNavigate()
    const {Favoutite ,  setFavourite ,  setCart} = useContext(SystemContext) as any
    const  removeItem = (id:any)=>{
       setFavourite((prev:any[]) => prev.filter((item:any[]) => item.id !== id));
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