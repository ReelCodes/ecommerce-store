import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty!</h1>;
  return (
    <section className=" p-0 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      height: "5rem",
                      width: "5rem",
                      objectFit: "cover",
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button
                      className=" btn btn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className=" btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
