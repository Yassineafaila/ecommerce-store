import React from 'react'
import './CouponCode.scss';
function CouponCode() {
  return (
      <div className='coupon'>
          <input className='coupon__input' type='text' placeholder='Coupon Code' />
          <button className='coupon__btn' type='button'>Apply Coupon</button>
    </div>
  )
}

export default CouponCode