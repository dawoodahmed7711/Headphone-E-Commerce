import { useContext, useState } from 'react';
import { FiChevronRight, FiMinus, FiPlus, FiShoppingBag, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './details.css';
import Product8 from '../../assets/product8.jpg'
import { SystemContext } from '../../Context.tsx';
// ---------- Data object (fits in wherever you plug your real data) ----------
import Payment from '../Payment/Payment.tsx';
import { toast, ToastContainer } from 'react-toastify';
const product = {
  badge: 'New',
  name: 'Golden Yellow',
  tagline: 'Move without friction',
  description: 'Ultra-light wireless mouse with a silent click and all-day battery life.',
  price: 45.0,
  image: Product8,
  stockStatus: 'In Stock',
};
interface Data {
  id:number,
   badge: string,
  name: string,
  tagline: string,
  description: string,
  price: number,
  image: any,
  stockStatus: string,
  Quantity:number,
}
function ProductDetail() {
  const navigate = useNavigate()
  const {Details ,  AddCart  , OrderData , CurrentData , setCurrent} = useContext(SystemContext)
  const [quantity, setQuantity] = useState(1);
  
  
  function Increment():number{
    return Details.price*quantity;
  }
  const Obj:Data = {
      id:Details.id,
    badge: Details.badge,
  name: Details.name,
  tagline: Details.tagline,
  description: 'Ultra-light wireless mouse with a silent click and all-day battery life.',
  price: Increment(),
  image: Details.image,
  stockStatus: 'In Stock',
  Quantity:quantity,
   }
   function AddtoCart(){
     AddCart(Obj)
     toast.success('Added to Cart ')
   
   }
   const done = ()=>{
      setCurrent([Obj])
   }
  
  return (
    <section className="pd-section">
      <div className="pd-breadcrumb">
        <span>Home</span>
        <FiChevronRight className="pd-breadcrumb-icon" />
        <span>Products</span>
        <FiChevronRight className="pd-breadcrumb-icon" />
        <span className="pd-breadcrumb-active">{Details.name}</span>
      </div>

      <div className="pd-grid">
        {/* ---------- Gallery ---------- */}
        <div className="pd-gallery">
          <div className="pd-main-image">
            {Details.badge && <span className="pd-badge">{Details.badge}</span>}
            <img src={Details.image} alt={Details.name} className="pd-product-image" />
          </div>
        </div>

        {/* ---------- Info ---------- */}
        <div className="pd-info">
          <h1 className="pd-title">{Details.name}</h1>
          <p className="pd-tagline">{Details.tagline}</p>

          <div className="pd-price">${Increment().toFixed(2)}</div>

          <div className="pd-divider" />

          <div className="pd-description">
            <span className="pd-label">Description</span>
            <p className="pd-desc-paragraph">{Details.description}</p>
          </div>

          <div className="pd-qty-row">
            <div className="pd-qty-stepper">
              <button
                className="pd-qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <FiMinus />
              </button>
              <span className="pd-qty-value">{quantity}</span>
              <button  className="pd-qty-btn"  onClick={()=>{setQuantity((q)=>q+1), Increment()}} >
                <FiPlus />
              </button>
            </div>
            <div className="pd-stock">
              <FiCheckCircle className="pd-stock-icon" />
              {product.stockStatus}
            </div>
          </div>

          <button onClick={AddtoCart} className="pd-add-to-cart">
            <FiShoppingBag />
            Add to Cart
          </button>

          <div  className="pd-secondary-row">
            <button onClick={()=>{done(), navigate('/payment')}} className="pd-buy-now">Buy Now</button>
            <button className="pd-wishlist-btn" aria-label="Add to wishlist">
              <FiHeart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;