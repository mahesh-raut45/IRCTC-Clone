import { useEffect, useState } from "react";

const Search = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const responce = await fetch("https://dummyjson.com/products");
        const data = await responce.json();
        setProduct(data.products);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  //   const handleSearch = () => {
  //     console.log(value);
  //   };

  return (
    <div>
      {product.map((item) => {
        return (
          <p>
            {item.title} : {item.brand}
          </p>
        );
      })}
      {/* <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button> */}
    </div>
  );
};

export { Search };
