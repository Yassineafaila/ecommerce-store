import React from 'react'
import "./CartTotal.scss"
import { useProducts } from '../../context/ProductsContext'
function CartTotal() {
  const {TotalPrice}=useProducts()
  return (
      <div className='cart'>
          <h3 className='cart__title'>Cart Total</h3>
          <div className='cart__container'>
              <span>shipping</span>
              <span>Free</span>
          </div>
          <div className='cart__container'>
              <span>Total</span>
        <span>${ TotalPrice}</span>
          </div>
          <button className='cart__action'>Process to checkout</button>
    </div>
  )
}

export default CartTotal