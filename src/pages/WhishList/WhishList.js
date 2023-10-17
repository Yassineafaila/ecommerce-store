import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import Card from '../../components/ProductCard/ProductCard'
import Cardskeleton from '../../components/ProductCard/Card.skeleton'
import "./WhishList.scss"
function WhishList() {
    const { likedProducts, isLoading } = useProducts()
    console.log(likedProducts)
  return (
    <main className="wish__list">
      <h2>WhishList ({likedProducts.length})</h2>
      <div className='wish__list__products'>
        {isLoading ? (
          <Cardskeleton count={10} />
        ) : (
          likedProducts.map((product) => (
            <Card product={product} key={product.id} liked={product.liked} />
          ))
        )}
      </div>
    </main>
  );
}

export default WhishList