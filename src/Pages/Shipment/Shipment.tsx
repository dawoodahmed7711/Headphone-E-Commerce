import {
  FiArrowLeft,
  FiFileText,
  FiPrinter,
  FiUser,
  FiSmartphone,
  FiMail,
  FiCreditCard,
} from "react-icons/fi";
import "./shipment.css";
import { SystemContext } from "../../Context.tsx";
import { useContext } from "react";
function Details() {
  const {shipdetail} = useContext(SystemContext)
  // all the page data lives in one plain object
  const order = {
    id: "#ORD-1025",
    placedOn: "October 24, 2024",
    contact: {
      name: "Alex Johnson",
      phone: "+1 (555) 123-4567",
      email: "alex.j@example.com",
    },
    shipping: {
      line1: "123 Luxury Lane",
      line2: "Suite 100",
      cityStateZip: "New York, NY 10001",
      country: "United States",
    },
    payment: {
      method: "Cash on Delivery (COD)",
      note: "Pay when your order arrives.",
    },
  };

  return (
    <div className="details-page">
      {/* ---------- Header ---------- */}
      <div className="details-header">
        <div className="details-title-row">
          <FiArrowLeft className="back-icon" />
          <h1>Order Details</h1>
          <span className="order-id-badge">{order.id}</span>
        </div>

        <p className="placed-on">Placed on {order.placedOn}</p>

        <div className="header-actions">
          <button className="receipt-btn" type="button">
            <FiFileText /> Receipt
          </button>
          <button className="print-btn" type="button">
            <FiPrinter /> Print Label
          </button>
        </div>
      </div>

      {/* ---------- Customer & Delivery card ---------- */}
      <div className="details-card">
        <h2 className="details-card-title">Customer & Delivery</h2>

        {/* ---------- Contact ---------- */}
        <div className="detail-section">
          <p className="detail-label">CONTACT</p>

          <p className="detail-line detail-name">
            <FiUser /> {shipdetail.Fullname}
          </p>
          <p className="detail-line">
            <FiSmartphone /> {shipdetail.Number}
          </p>
          <p className="detail-line">
            <FiMail /> {shipdetail.Email}
          </p>

          <hr />
        </div>

        {/* ---------- Shipping Address ---------- */}
        <div className="detail-section">
          <p className="detail-label">SHIPPING ADDRESS</p>

          <p className="detail-line">{shipdetail.Address}</p>
        

          <hr />
        </div>

        {/* ---------- Payment method ---------- */}
        <div className="detail-section">
          <p className="detail-label">PAYMENT METHOD</p>

          <div className="payment-box">
            <FiCreditCard className="payment-box-icon" />
            <p className="payment-box-text">
              <strong>{order.payment.method}</strong> {order.payment.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;