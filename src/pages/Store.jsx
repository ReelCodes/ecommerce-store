import ProductCard from "../components/ProductCard";

const Store = ({ data }) => {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <ProductCard
              title={item.name}
              desc={item.desc}
              img={item.img}
              price={item.price}
              item={item}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Store;
