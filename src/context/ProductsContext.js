import { createContext, useContext, useEffect, useReducer, useState } from "react";

const ProductsContext = createContext();
const initialState = {
  products: [],
  CartProducts: [],
  likedProducts: [],
  TotalPrice: 0,
  isLoading: false,
  currentProduct: [],
  error:""
}
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {...state,isLoading:true}
    case "products/loaded":
      return { ...state,isLoading:false, products: action.payload }
    case "product/loaded":
      return { ...state, isLoading: false, currentProduct: action.payload }
    case "addCart":
      return { ...state, CartProducts: action.payload }
    case "CalculTotalPrice":
      return { ...state, TotalPrice: action.payload }
    case "addLikedProduct":
      return {...state,likedProducts:action.payload}
    case "rejected":
      return {...state,isLoading:false,error:action.payload}

  }
}
function ProductsProvider({ children }) {
  // const [products, setProducts] = useState([]);
  // const [CartProducts, setCartProducts] = useState([]);
  // const [likedProducts, setLikedProducts] = useState([]);
  // const [TotalPrice, setTotalPrice] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);
  // const [currentProduct, setCurrentProduct] = useState([]);
  let [{products,CartProducts,likedProducts,TotalPrice,isLoading,currentProduct},dispatch]=useReducer(reducer,initialState)
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({type:"loading"})
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch({type:"products/loaded",payload:data})
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading products ...",
        });
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    calculateTotalPrice()
  },[CartProducts])
  async function getProductInfo(id) {
    const fetchProduct = async () => {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        dispatch({ type:"product/loaded",payload:data})
      } catch (error) {
        console.log("Error while fetching the product details", error);
        dispatch({
          type: "rejected",
          payload: "There was an error loading product ...",
        });
      }
    };
    fetchProduct();
  }
  const AddProductsToCart = (id) => {
    const existingProduct = CartProducts.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.subTotal =
        existingProduct.quantity * existingProduct.price;
    } else {
      const product = products.find((item) => item.id === id);

      if (product) {
        // setCartProducts((prevCartProducts) => [
        //   ...prevCartProducts,
        //   { ...product, quantity: 1, subTotal: product.price },
        // ]);
        // CartProducts=[...CartProducts,{...product,quantity:1,subTotal:product.price}]
        dispatch({
          type: "addCart",
          payload: [
            ...CartProducts,
            { ...product, quantity: 1, subTotal: product.price },
          ],
        });
      }
    }

    calculateTotalPrice();
    
  };
  const IncrementQuantity = (id) => {
    const productCart = CartProducts.find((item) => item.id === id);
    if (productCart) {
      productCart.quantity += 1;
      productCart.subTotal = productCart.quantity * productCart.price;
      // setCartProducts([...CartProducts]);
      // CartProducts=[...CartProducts]
      dispatch({ type: "addCart", payload: [...CartProducts] });
      calculateTotalPrice();
    }
    
  };

  const DecrementQuantity = (id) => {
    const productCartIndex = CartProducts.findIndex((item) => item.id === id);
    if (productCartIndex !== -1) {
      const productCart = CartProducts[productCartIndex];
      if (productCart.quantity <= 1) {
        CartProducts.splice(productCartIndex, 1);
      } else {
        productCart.quantity -= 1;
        productCart.subTotal = productCart.quantity * productCart.price;
      }
      // setCartProducts([...CartProducts]);
      // CartProducts = [...CartProducts];
      dispatch({ type: "addCart", payload: [...CartProducts] });
      calculateTotalPrice();
    }
    
  };
  const RemoveProductFromTheCart = (id) => {
    // setCartProducts([...CartProducts.filter((product) => product.id !== id)]);
    // CartProducts = [...CartProducts.filter((product) => product.id !== id)];
    dispatch({
      type: "addCart",
      payload: [...CartProducts.filter((product) => product.id !== id)],
    });
  };
  const calculateTotalPrice = () => {
    const total = CartProducts.reduce(
      (acc, product) => acc + product.subTotal,
      0
    );
    // setTotalPrice(Math.round(total));
    dispatch({ type: "CalculTotalPrice",payload:total });
  };
  const AddLikedProducts = (id) => {
    const likedProduct = likedProducts.find((item) => item.id === id);
    if (likedProduct) {
      console.log("the product already liked");
    } else {
      const product = products.find((item) => item.id == id);
      // setLikedProducts([...likedProducts, {...product,liked:true}]);
      dispatch({
        type: "addLikedProduct",
        payload: [...likedProducts, { ...product, liked: true }],
      });
    }
  };
  const RemoveLikedProduct = (id) => {
    console.log("hi")
    // setLikedProducts((prevLikedProducts) =>
    //   prevLikedProducts.filter((product) => product.id !== id)
    // );
    dispatch({
      type: "addLikedProduct",
      payload: likedProducts.filter((product) => product.id !== id),
    });
  }
  return (
    <ProductsContext.Provider
      value={{
        products: products,
        isLoading: isLoading,
        getProductInfo,
        currentProduct: currentProduct,
        AddProductsToCart: AddProductsToCart,
        CartProducts,
        likedProducts,
        RemoveProductFromTheCart,
        IncrementQuantity,
        DecrementQuantity,
        AddLikedProducts,
        RemoveLikedProduct,
        TotalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("Products context was used outside the ProductsProvider");
  return context;
}
export { ProductsProvider, useProducts };
