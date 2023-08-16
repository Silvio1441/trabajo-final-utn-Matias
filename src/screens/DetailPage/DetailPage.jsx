import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { Counter } from "../../components"
import "./DetailPage.css"

const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()

    const [productDetail, setProducDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))
    
    const [productIsInCart, setProductIsInCart] = useState(isInCart(id))

    return (
        <div className="cont-detalle">
            <span>{productDetail.imagen}</span>
            <h1>{productDetail.nombre}</h1>
            <h2 className="precio">${productDetail.precio}</h2>
            <p className="parr-desc">Descripción: {productDetail.descripcion}</p>
            {
              isInCart(id)
              ?
              <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
              :
              <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>       
            }
        </div>
        
    )
}

export default DetailPage