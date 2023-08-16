import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components';
import "./CartPage"

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal);
  return (
    <div className='cart'>
        {/* CartPage */}
        <div>
            {
                cart.map(product => (
                  <ProductCartCard key={product.id} producto={product}/>
                ))
            }
        </div>
        <h1>Total: {getTotal()}</h1>
        <button className='btn-cart'>Comprar</button>
    </div>
  )
}

export default CartPage