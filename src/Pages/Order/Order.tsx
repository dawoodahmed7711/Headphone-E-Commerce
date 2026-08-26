import "./order.css";
import { SystemContext } from "../../Context.tsx";
import { useContext } from "react";
// each order's data lives right here in one array
import Shipment from '../Shipment/Shipment.tsx'
import { useNavigate } from "react-router-dom";

// picks a badge color class based on the order status text
type OrderType = any

function Detaill() {
  const navigate = useNavigate()
     const {Order , ship} = useContext(SystemContext)
  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>
      <p className="orders-subtitle">Track and manage all your placed orders.</p>

      <div className="orders-list">
        {Order.map((order ,  index) => (
          <div className="order-card" key={index}>
            <img className="order-image" src={order.Product.image} alt={order.Product.name} />

            <div className="order-info">
              <div className="order-name-row">
                <h3 className="order-name">{order.Product.name}</h3>
                <span className='getStatusClass'>Pending</span>
              </div>
              <p className="order-id">{order.id}</p>

              <div className="order-details-row">
                <div className="order-details-col">
                  <p>Qty: {order.Product.Quantity}</p>
                  <p>Date: {new Date().toISOString().split('T')[0]}</p>
                </div>
                <div className="order-details-col">
                  <p>Color: {order.Product.badge}</p>
                  <p>Payment: ${order.Product.price}</p>
                </div>
              </div>
            </div>

            <div className="order-side">
              <p className="order-total-label">Total Amount</p>
              <p className="order-total-amount">${order.Product.price}</p>
              <button onClick={()=>{ship(order.Shipment), navigate('/shipment')}} className="order-view-btn" type="button">
                Shipping Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detaill;
