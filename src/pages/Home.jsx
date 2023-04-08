import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import Store from "./Store";
import data from "../productsStore";
import FooterComponent from "../components/FooterComponent";

const Home = () => {
  const [items, setItems] = useState(data.productsData);
  const displayProducts = (filteredItems) => {
    setItems(filteredItems);
  };
  return (
    <>
      <NavbarComponent
        data={data.productsData}
        displayProducts={displayProducts}
      />
      <Store data={items} />
      <FooterComponent />
    </>
  );
};

export default Home;
