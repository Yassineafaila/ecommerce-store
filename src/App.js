import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./pages/ShopPage/ShopPage";
import WhishList from "./pages/WhishList/WhishList";
import SignIn from "./pages/SignIn/SignIn";
function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <Header>
            <Navbar/>
          </Header>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="products/:id" element={<ProductInfo />} />
            <Route path="/shopping-cart" element={<ShopPage />} />
            <Route path="/wish-list" element={<WhishList/>}/>
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
