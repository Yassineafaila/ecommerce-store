import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const styleContainer = {
    "display": "flex",
    "alignItems": "Center",
    "gap": "20px",
    "maxWidth": "1280px",
    "margin":"0 auto"
    
}
const styleContentContainer = {
    "display": "flex",
    "alignItems": "center",
    "gap": "10px",
    "padding":"1rem"
}
function ProductInfoSkeletion() {
  return (
    <section style={styleContainer}>
      <article style={styleContentContainer}>
        <Skeleton width={500} height={500} />

        <div >
          <Skeleton count={2} width={300}/>
        </div>
      </article>
    </section>
  );
}

export default ProductInfoSkeletion