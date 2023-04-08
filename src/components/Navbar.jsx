import { useState } from "react";
import { Button, Navbar, Dropdown } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { FaShoppingBasket } from "react-icons/fa";
import ModalComponent from "./ModalComponent";

const NavbarComponent = ({ data, displayProducts }) => {
  const { totalUniqueItems, emptyCart } = useCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const allCats = data.map((item) => item.cat);
  const cats = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];
  const handleClick = (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  };
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="dark"
        className="navbar navbar-light bg-light shadow-lg"
      >
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "space-betwee" }}
        >
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-light btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={(e) => handleClick(e)}>
              {cats.map((cat, index) => (
                <Dropdown.Item key={index}>
                  <p className="dropdown-item link-text mb-0" href="#">
                    {cat}
                  </p>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <form className=" mx-2">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search Items..."
              aria-label="Search"
              onKeyUp={(e) => handleSearch(e)}
            />
          </form>
          <Navbar.Brand>
            <Button
              className=" btn btn-primary position-relative"
              onClick={handleShow}
            >
              <FaShoppingBasket style={{ fontSize: "30px" }} />
              {totalUniqueItems > 0 ? (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalUniqueItems}
                </span>
              ) : (
                ""
              )}
            </Button>
          </Navbar.Brand>
        </div>
      </Navbar>
      <ModalComponent
        show={show}
        handleClose={handleClose}
        emptyCart={emptyCart}
      />
    </>
  );
};

export default NavbarComponent;
