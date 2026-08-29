import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiHome,
  FiHash,
  FiCheckCircle,
  FiShoppingBag,
} from "react-icons/fi";
import "./Payment.css";
import { useContext, useState } from "react";
import { SystemContext } from "../../Context.tsx";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate()
  const {Current , setOrder ,  OrderData} = useContext(SystemContext)
  const [Fullname , setFullName] = useState<string>('')
   const [Email , setEmail] = useState<string>('')
    const [Phone , setPhone] = useState<string>('')
     const [Address , setAddress] = useState<string>('')
      const [City , setCity] = useState<string>('')
       const [Postal , setPostal] = useState<string>('')

     

      function Data(){
        const ShippingData = {
          Fullname:Fullname,
          Email:Email,
          Number:Phone,
          Address:Address,
          City:City,
          Code:Postal,
          
        }
        const Both = {
          Shipment:ShippingData,
          Product:Current,
        } 
        OrderData(Both)
        toast.success('Order Completed')
        navigate('/order')
      }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        {/* ---------- Header ---------- */}
        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>Enter your details to complete your order.</p>
        </div>

        {/* ---------- Form ---------- */}
        <div className="checkout-body">
          <div className="form-row">
            <div className="form-group">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <FiUser className="input-icon" />
                <input type="text"
                 placeholder="Enter your full name"
                 value={Fullname}
                 onChange={(e)=>setFullName(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>
                Email Address <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <FiMail className="input-icon" />
                <input type="email"
                 placeholder="Enter your email address"
                  value={Email}
                 onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>
              Phone Number <span className="required">*</span>
            </label>
            <div className="input-with-icon">
              <FiPhone className="input-icon" />
              <input type="tel"
              placeholder="Enter your phone number" 
               value={Phone}    
               onChange={(e)=>setPhone(e.target.value)}             />
            </div>
          </div>

          <hr />

          <div className="form-group">
            <label>
              Delivery Address <span className="required">*</span>
            </label>
            <div className="input-with-icon">
              <FiMapPin className="input-icon input-icon-top" />
              <textarea value={Address} onChange={(e)=>setAddress(e.target.value)} rows={3} placeholder="Enter your complete delivery address" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                City <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <FiHome className="input-icon" />
                <input type="text"
                 placeholder="Enter your city"
                 value={City}
                 onChange={(e)=>setCity(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>
                Postal Code <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <FiHash className="input-icon" />
                <input value={Postal} onChange={(e)=>setPostal(e.target.value)} type="text" placeholder="Enter postal code" />
              </div>
            </div>
          </div>

          <hr />

          {/* ---------- Payment method ---------- */}
          <h2 className="section-title">Payment Method</h2>

          <div className="payment-option payment-option-selected">
            <div>
              <p className="payment-option-title">Cash on Delivery</p>
              <p className="payment-option-text">Pay when your order arrives</p>
            </div>
            <FiCheckCircle className="payment-option-icon payment-option-icon-selected" />
          </div>
        </div>

        {/* ---------- Footer ---------- */}
        <div className="checkout-footer">
          <button onClick={Data} className="place-order-btn" type="button">
            <FiShoppingBag />
            Place Order
          </button>
          <p className="checkout-note">
            Please make sure your delivery information is correct before placing your order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;