import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import './ProductInfo.scss';
import ProductInfoSkeletion from "./ProductInfoSkeletion";
import LazyLoad from "react-lazy-load";
function ProductInfo() {
  const { id } = useParams();
  const { currentProduct, getProductInfo,isLoading } = useProducts();

  useEffect(() => {
    getProductInfo(id);
  }, [id]);
  const rate = currentProduct.rating?.rate;
  return (
    <>
      {isLoading ? (
        <ProductInfoSkeletion />
      ) : (
        <section className="container">
          <article className="product__info">
            <LazyLoad>
              <img src={currentProduct.image} alt="productImage" />
            </LazyLoad>
            <div className="product__content">
              <header>
                <h2 className="product__title">{currentProduct.title}</h2>
              </header>
              <section>
                <div>
                  <span className="product__rate">
                    {Array(parseInt(Math.round(rate ? rate : 0)))
                      .fill(0)
                      .map((item, index) => (
                        <svg
                          key={index}
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                            fill="#FFAD33"
                          />
                        </svg>
                      ))}
                    {Array(parseInt(5 - Math.round(rate ? rate : 0)))
                      .fill(0)
                      .map((item, index) => (
                        <svg
                          key={index}
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.25"
                            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                            fill="black"
                          />
                        </svg>
                      ))}
                  </span>
                  <span className="product__reviews">
                    ({currentProduct.rating?.count} Reviews)
                  </span>
                </div>
                <span className="product__price">${currentProduct.price}</span>
                <p className="product__description">
                  {currentProduct.description}
                </p>
              </section>
              <footer className="product__action">
                <div>
                  <button className="minus">-</button>
                  <input type="text" disabled={true} />
                  <button className="add">+</button>
                </div>
                <div>
                  <button className="btn__buy">Buy Now</button>
                  <button className="btn__like">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </footer>
            </div>
          </article>
        </section>
      )}
    </>
  );
}

export default ProductInfo;
