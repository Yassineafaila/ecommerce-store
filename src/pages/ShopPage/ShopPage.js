import React from "react";
import { useProducts } from "../../context/ProductsContext";
import CartMainSection from "../../components/Cart/CartMainSection";
import "./ShopPage.scss"
import { useNavigate } from "react-router-dom";
function ShopPage() {
  const { CartProducts } = useProducts();
  const navigate=useNavigate()
  return (
    <main className="main__shop">
      {CartProducts.length > 0 ? (
        <>
          <CartMainSection CartProducts={CartProducts} />
        </>
      ) : (
        <div >
            <h1>Your Shopping Cart Is Empty </h1>
            <button onClick={()=>navigate(-1)}>Go Back To Home Page</button>
        </div>
      )}
    </main>
  );
}

export default ShopPage;
