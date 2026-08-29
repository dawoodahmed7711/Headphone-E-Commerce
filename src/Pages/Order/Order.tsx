import "./order.css";
import { SystemContext } from "../../Context.tsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Detaill() {
  const navigate = useNavigate();
  const { Order, ship } = useContext(SystemContext);

  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>
      <p className="orders-subtitle">
        Track and manage all your placed orders.
      </p>

      <div className="orders-list">

        {Order.map((order:any, orderIndex:any) => (

          <div key={orderIndex}>

            {order.Product.map((product:any, productIndex:any) => (

              <div className="order-card" key={productIndex}>

                <img
                  className="order-image"
                  src={product.image}
                  alt={product.name}
                />

                <div className="order-info">

                  <div className="order-name-row">
                    <h3 className="order-name">
                      {product.name}
                    </h3>

                    <span className="getStatusClass">
                      Pending
                    </span>
                  </div>

                  <p className="order-id">
                    {order.id}
                  </p>

                  <div className="order-details-row">

                    <div className="order-details-col">
                      <p>Qty: {product.Quantity}</p>

                      <p>
                        Date:{" "}
                        {new Date().toISOString().split("T")[0]}
                      </p>
                    </div>

                    <div className="order-details-col">
                      <p>Color: {product.badge}</p>

                      <p>Payment: ${product.price}</p>
                    </div>

                  </div>
                </div>

                <div className="order-side">

                  <p className="order-total-label">
                    Total Amount
                  </p>

                  <p className="order-total-amount">
                    ${product.price}
                  </p>

                  <button
                    onClick={() => {
                      ship(order.Shipment);
                      navigate("/shipment");
                    }}
                    className="order-view-btn"
                    type="button"
                  >
                    Shipping Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        ))}

      </div>
    </div>
  );
}

export default Detaill;