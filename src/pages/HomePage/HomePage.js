import React, { useContext } from "react";
import Main from "../../components/Main/Main";
import Card from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../context/ProductsContext";
import Cardskeleton from "../../components/ProductCard/Card.skeleton";
function HomePage() {
  const { products, isLoading } = useProducts();
  return (
    <Main>
      {isLoading
        ? <Cardskeleton count={10} />
        : products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
    </Main>
  );
}

export default HomePage;
