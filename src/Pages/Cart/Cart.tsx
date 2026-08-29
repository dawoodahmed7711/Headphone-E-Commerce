import { FiChevronRight, FiTrash2, FiArrowLeft, FiLock } from 'react-icons/fi';
import './cart.css';
import { SystemContext } from '../../Context.tsx';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
// ---------- Dummy cart data ----------
interface CartData {
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
const cartItems = [
  {
    id: 1,
    name: 'Essential Sneakers',
    category: 'Footwear',
    variant: 'Color: White • Size: 9',
    price: 145.0,
    quantity: 1,
    badge:'New',
    tagline:'Hear Every Detail'
  },
  {
    id: 2,
    name: 'Matte Ceramic Mug',
    category: 'Homeware',
    variant: 'Color: Charcoal',
    price: 32.0,
    quantity: 2,
    badge:'Best Seller',
    tagline:'Track Every Beat'
  },
];

const summary = {
  subtotal: 209.0,
  discount: 0.0,
  shipping: 15.0,
  tax: 17.77,
  total: 241.77,
};


function Cart() {  
  const {Cart ,  setCart ,  setCurrent} = useContext(SystemContext) as any
  const navigate = useNavigate()
  const [total  , settotal] = useState<number>(0)
  
  const  removeItem = (id:number)=>{
    setCart((prev:any[])=> prev.filter(item => item.id !== id));
    toast.error('Item Removed From Cart')
  };
  
  useEffect(()=>{
     let tax:number = 20;
       let Shipping:number = 14;
      let Subtotal = Cart.reduce((Total:number , item:any )=>{
        return  Total+Number(item.price);
      },0)
    
      const Result = Subtotal+tax+Shipping;
      settotal(Result)
  })
  function CarttoOrder(){
    setCurrent(Cart)
    navigate('/payment')
  }
   
   
  return (
    <section className="cart-section">
      <div className="cart-breadcrumb">
        <span>Home</span>
        <FiChevronRight className="cart-breadcrumb-icon" />
        <span className="cart-breadcrumb-active">Cart</span>
      </div>

      <div className="cart-header">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <span className="cart-item-count">{cartItems.length} items</span>
      </div>

      <div className="cart-grid">
        {/* ---------- Items list ---------- */}
        <div className="cart-items">
          {Cart.map((item:CartData ,  index:number ) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} className="cart-item-image-icon" />
              </div>
         
              <div className="cart-item-body">
                <div className="cart-item-top">
                  <div>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-category">{item.badge}</div>
                    <div className="cart-item-variant">{item.tagline}</div>
                  </div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>

                <div className="cart-item-bottom">
                  <div  className="cart-qty-stepper">
                    
                    <p><span className="cart-qty-value">Quantity:{item.Quantity}</span></p>
                  
                  </div>
                  <button onClick={()=>removeItem(item.id)} className="cart-delete-btn" aria-label="Remove item">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <NavLink  to='/details'  className="cart-continue">
            <FiArrowLeft />
            Continue Shopping
          </NavLink>
        </div>

        {/* ---------- Order summary ---------- */}
        <div className="cart-summary">
          <h2 className="cart-summary-title">Order Summary</h2>
          <div className="cart-summary-divider" />


          <div className="cart-summary-line">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="cart-summary-line">
            <span>Discount</span>
            <span className="cart-discount-value">-${summary.discount.toFixed(2)}</span>
          </div>
          <div className="cart-summary-line">
            <span>Shipping</span>
            <span>$14</span>
          </div>
          <div className="cart-summary-line">
            <span>Tax (8.5%)</span>
            <span>$20</span>
          </div>

          <div className="cart-summary-divider" />

          <div className="cart-total-row">
            <span>Total</span>
            <span className="cart-total-value">${total.toFixed(2)}</span>
          </div>

          <button className="cart-pay-btn" onClick={CarttoOrder}>Proceed to Pay</button>

          <div className="cart-secure-row">
            <FiLock className="cart-secure-icon" />
            Secure Checkout
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
