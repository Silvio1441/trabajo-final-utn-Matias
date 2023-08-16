import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = ({producto}) => {
    return (
        <div className="contenedor">
            <h3>{producto.imagen}</h3>
            <span className="cat">{producto.categoria}</span>
            <h2 className="nombre">{producto.nombre}</h2>
            <h2 className="precio">${producto.precio}</h2>
            {/* <p>{producto.descripcion}</p> */}
            <Link to={"/detail/" + producto.id} className="detalle"> Ver detalle</Link>
        </div>
    )
}

export default ProductCard