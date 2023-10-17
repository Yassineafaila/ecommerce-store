import React from 'react'
import './CartMainSection.scss';
import { useProducts } from '../../context/ProductsContext';
function CartMainSection({ CartProducts }) {

  const {
    RemoveProductFromTheCart,
    IncrementQuantity,
    DecrementQuantity,
    TotalPrice,
  } = useProducts();
  return (
      <table className='table'>
          <thead>
              <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                  <th>SubTotal</th>
              </tr>
          </thead>
          <tbody>
              {
                  CartProducts.map((product) => {
                      return (
                        <tr key={product.id}>
                          <td>
                            <img src={product.image} alt="product__image" />
                          </td>
                          <td>${product.price}</td>
                          <td>
                            <button
                              className="add"
                              onClick={() => IncrementQuantity(product.id)}
                            >
                              +
                            </button>
                            <button className="value">
                              {product.quantity}
                            </button>
                            <button
                              className="minus"
                              onClick={() => DecrementQuantity(product.id)}
                            >
                              -
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn__Remove"
                              onClick={() =>
                                RemoveProductFromTheCart(product.id)
                              }
                            >
                              Remove
                            </button>
                          </td>
                          <td>${product.subTotal}</td>
                        </tr>
                      );
                  })
              }
      </tbody>
    </table>
  )
}

export default CartMainSection