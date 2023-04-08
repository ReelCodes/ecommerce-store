import { Modal } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Cart from "../pages/Cart";
import { useNavigate } from "react-router";

const ModalComponent = ({ show, handleClose }) => {
  const { totalItems, totalUniqueItems, cartTotal, emptyCart } = useCart();
  const navigate = useNavigate();

  return (
    <Modal show={show} onHide={handleClose} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>
            Cart ({totalUniqueItems}) Total Items: ({totalItems})
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cart />
      </Modal.Body>
      {cartTotal > 0 ? (
        <Modal.Footer>
          <div className="col-auto mt-2">
            <h5>Total Price: Ksh {cartTotal}</h5>
          </div>
          <div
            className="col-auto"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => navigate("/checkout")}
            >
              Buy Now
            </button>
          </div>
        </Modal.Footer>
      ) : (
        ""
      )}
    </Modal>
  );
};

export default ModalComponent;
