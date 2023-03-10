import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Something went wrong</p>;
  } else if (!loading && !error && products.length) {
    content = products
      .filter((items) => items.rating >= 4)
      .map((product) => <ProductCard key={product.id} product={product} />);
  } else {
    content = <p>Data not found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;
