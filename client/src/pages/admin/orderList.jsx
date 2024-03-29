import "../../styles/admin/orderList.css";
// import products from "../../pages/user/productList";
import { completedOrders, pendingOrders, canceledOrders } from "../../pages/user/productList";
import AdminHomePage from "../../components/admin/adminHeader";
import { useOffCanvasContext } from "../../components/admin/adminHeader";
const getStatusColor = (status) => {
  let statusColor;

  switch (status) {
    case "Complete":
      statusColor = "green";
      break;
    case "Pending":
      statusColor = "orange";
      break;
    case "Cancelled":
      statusColor = "red";
      break;
    default:
      statusColor = "red";
  }

  return {
    backgroundColor: statusColor,
    color: "white",
    padding: "5px 7px",
    borderRadius: "5px",
    margin: "0px 10px",
    cursor: "pointer",
  };
};
const CompletedOrders = () => {
  const { showOffCanvas } = useOffCanvasContext();

  return (
    <>
      <AdminHomePage />
      <div className={`orderList-container ${showOffCanvas ? "content-shifted" : ""} `}>
        <table className="orderList-table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Order ID</th>
              <th>Product </th>
              <th>Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {completedOrders.map((product) => (
              <tr key={product.id}>
                <td>
                  <p>{product.id}</p>
                </td>
                <td>
                  <p>#71625353A12</p>
                </td>
                <td>
                  <img src={product.imgSrc} alt="" />
                </td>
                <td>
                  <p>{product.productName}</p>
                </td>
                <td>
                  <p>354 Washington Ave, Manchester</p>
                </td>
                <td>
                  <p>29/02/2024</p>
                </td>
                <td>${product.newPrice}</td>
                <td className="orderList-status">
                  <div className="status" style={getStatusColor(product.status)}>
                    <span>{product.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const PendingOrders = () => {
  const { showOffCanvas } = useOffCanvasContext();

  return (
    <>
      <AdminHomePage />
      <div className={`orderList-container ${showOffCanvas ? "content-shifted" : ""} `}>
        <table className="orderList-table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Order ID</th>
              <th>Product </th>
              <th>Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders.map((product) => (
              <tr key={product.id}>
                <td>
                  <p>{product.id}</p>
                </td>
                <td>
                  <p>#71625353A12</p>
                </td>
                <td>
                  <img src={product.imgSrc} alt="" />
                </td>
                <td>
                  <p>{product.productName}</p>
                </td>
                <td>
                  <p>354 Washington Ave, Manchester</p>
                </td>
                <td>
                  <p>29/02/2024</p>
                </td>
                <td>${product.newPrice}</td>
                <td className="orderList-status">
                  <div className="status" style={getStatusColor(product.status)}>
                    <span>{product.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const CanceledOrders = () => {
  const { showOffCanvas } = useOffCanvasContext();

  return (
    <>
      <AdminHomePage />
      <div className={`orderList-container ${showOffCanvas ? "content-shifted" : ""} `}>
        <table className="orderList-table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Order ID</th>
              <th>Product </th>
              <th>Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {canceledOrders.map((product) => (
              <tr key={product.id}>
                <td>
                  <p>{product.id}</p>
                </td>
                <td>
                  <p>#71625353A12</p>
                </td>
                <td>
                  <img src={product.imgSrc} alt="" />
                </td>
                <td>
                  <p>{product.productName}</p>
                </td>
                <td>
                  <p>354 Washington Ave, Manchester</p>
                </td>
                <td>
                  <p>29/02/2024</p>
                </td>
                <td>${product.newPrice}</td>
                <td className="orderList-status">
                  <div className="status" style={getStatusColor(product.status)}>
                    <span>{product.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { CompletedOrders, PendingOrders, CanceledOrders };
