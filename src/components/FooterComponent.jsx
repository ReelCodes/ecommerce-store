import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="container bg-light">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link href="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link px-2 text-muted">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link px-2 text-muted">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link href="tel:+254114565007" className="nav-link px-2 text-muted">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="mailto:icrackedit17@gmail.com"
              className="nav-link px-2 text-muted"
            >
              Mail Us
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2023 Jobah LLC</p>
      </footer>
    </div>
  );
};

export default FooterComponent;
