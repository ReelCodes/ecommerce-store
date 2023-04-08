import { useCart } from "react-use-cart";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-10 col-md-6 col-lg-3 mx-0 mb-4">
      <div>
        <div className="card p-0 overflow-hidden h-100 shadow align-items-center rounded-4 hover">
          <div
            className=" h-50 align-items-center justify-content-center d-flex
        "
            style={{ objectFit: "contain" }}
          >
            <img
              src={`${props.img}`}
              alt=""
              className="card-img-top img-fluid py-2"
              style={{ width: "12rem", height: "12rem" }}
            />
          </div>
        </div>
        <div
          className="text-center mt-3 bg-light p-2"
          style={{ width: "100%" }}
        >
          <h6 className="">{props.title}</h6>

          <h5 className="">Ksh {props.price}</h5>
          <button
            className="btn btn-info w-100 btn-md"
            onClick={() => addItem(props.item)}
          >
            Add to cart
            <FaShoppingCart className=" mx-3"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
