import React from 'react'
import "./ProductCartCard.css"


const ProductCartCard = ({producto}) => {
  return (
    <>
    <div className='Contenedor-cart'>
    <div className='conty'>
            
            <h3 >{producto.imagen}</h3>
            <h2>{producto.nombre}</h2>
            <h3>$ {producto.precio}</h3>
            {/* <p>{producto.descripcion}</p> */}
            <p className='cant'>Cantidad: {producto.quantity}</p>
        <hr />
    </div>
    </div>
    </>
  )
}

export default ProductCartCard