import React, { useEffect, useState } from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { ProductCard } from "../../components";
import "./HomePage.css"

const HomePage = () => {
  const {products} = useCustomContext()
  const [searchProduct, setSearchProduct] = useState("")
  const [max, setMax] = useState("1000000")
  const [min, setMin] = useState("0")
  const[currentProducts, setCurrentProducts] =useState(products)

  useEffect(() => {
    setCurrentProducts(products.filter(
      producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max
      ))
  }, [searchProduct, max, min])
    return (
          <div>
            <div className="filtro-1">
          <h1>Lista de productos</h1>
            <h2>Filtrar por item</h2>
            <input placeholder="Busca el nombre del producto" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} className="search"/>
            </div> 
          <div>
              <h2>Filtrar por precio</h2>
              <div className="filtro-2">
              <input type="text" onChange={(e) => setMin(Number(e.target.value))} />
              <input type="text" onChange={(e) => setMax(Number(e.target.value))}/>
              
              </div>
            </div>
          <div>
            <div className="cont-P">
            {currentProducts.map(producto => (
            <ProductCard  producto = {producto} key={producto.id}/>
                ))}
            </div>
          </div> 
        </div>
    )
}

export default HomePage