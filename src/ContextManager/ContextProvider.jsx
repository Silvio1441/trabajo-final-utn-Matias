import React,{createContext, useContext, useState} from "react"

const Context = createContext()

const ContextProvider = ({children}) => {
    const products = [
        {
            nombre: "Apple Mac Book Pro",
            imagen: <img src="https://tse1.mm.bing.net/th?id=OIP.jvDj0ft5SCN36ZSWEIJJYQHaHa&pid=Api&P=0&h=180" width={150} />,
            categoria: "LAPTOPS",
            precio: 1200,
            id: 1,
            stock: 4,
            descripcion: "Apple 2020 Laptop MacBook Air: Chip M1 de Apple, Pantalla Retina de 13 Pulgadas, 8 GB de RAM, Almacenamiento SSD de 256 GB, Teclado retroiluminado, cámara FaceTime HD y Touch ID"
        },
        {
            nombre: "iPad Pro 11",
            imagen: <img src="https://betasystem.net/wp-content/uploads/2018/11/ipad-pro-12-select-wifi-spacegray-202003_GEO_ES_FMT_WHH.png" width="170" />,
            categoria: "TABLETS",
            precio: 950,
            id: 2,
            stock: 8,
            descripcion: "Apple 2022 iPad Pro de 11 Pulgadas (Wi-Fi, 128 GB) - Gris Espacial (cuarta generación). Tamaño de la pantalla	11 Pulgadas. Sistema operativo IOS. Espectacular pantalla Liquid Retina de 11 pulgadas con ProMotion, True Tone y amplia gama de colores P3"
        },
        {
            nombre: "Monitor Samsung Qled 4K",
            imagen: <img src="https://www.bhphotovideo.com/images/images2500x2500/samsung_qn75q80aafxza_q80a_75_class_hdr_1620629.jpg" width="150" />,
            categoria: "COMPUTERS",
            precio: 750,
            id: 3,
            stock: 5,
            descripcion: "SAMSUNG Pantalla 43 QLED 4K QN43QN90CAFXZX. Tecnoligía Quantum Matrix, Procesador Neural Quantum 4K, Anti reflejos, Dolby Atmos"
        },
        {
            nombre: "Samsung Galaxy S23 Ultra",
            imagen: <img src="https://tse1.mm.bing.net/th?id=OIP.JkUSeWkcu1Ckn_uUgckSwQHaHa&pid=Api&P=0&h=180" width="150" />,
            categoria: "PHONES",
            precio: 500,
            id: 4,
            stock: 8,
            descripcion: "Samsung Galaxy S23 Ultra 12GB_512GB Lavanda Desbloqueado. DUAL SIM (1 SIM Y 1 eSIM). Procesador qualcomm, Red5G, 512GB. 12GB RAM, Camara trasera 200 MP F1.7 + 10 MP F4.9 + 10 MP F2.4. IP68, Tamaño de pantalla 6.8”"    
        },
        {
            nombre: "Microsoft Surface Studio",
            imagen: <img src="https://i5.walmartimages.com/asr/d3d7a6c7-18cc-41fa-b4ef-062a21808331.8110f32469fc1f3c8d116ac890bdd4d4.jpeg" width="150" />,
            categoria: "TABLETS",
            precio: 800,
            id: 5,
            stock: 8,
            descripcion: "tablet Microsoft Surface Go 2 LTE, Intel Core m3 M3-8100Y, Intel HD Graphics 615, 8 GB de RAM, almacenamiento SSD de 128 GB, Windows 10 Pro, Platinum"
        },
        {
            nombre: "Samsung Watch",
            imagen: <img src="https://img.globaldata.pt/products/SM-R870NZKAEUB_1.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=1246&h=1246" width="150" />,
            categoria: "WATCHES",
            precio: 450,
            id: 6,
            stock: 3,
            descripcion: "AMSUNG Electronics Reloj Inteligente Galaxy Watch 4 de 40 mm con Monitor ECG para Salud, Fitness, Correr, ciclos de sueño, detección de caídas GPS, versión Estadounidense, Color Negro"
        }

    ]

    const getProductById = (id) => {
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    /*El estado del array de objetos del carrito*/
    
const [cart, setCart] = useState([])
const isInCart = (id) => cart.some(producto => producto.id === Number(id))

const addProductCart = (id, quantity) => {
    if(isInCart(id)){
        console.log("Ya existe");
        setCart(cart.map(product => {
            if(product.id == id){
                product.quantity = quantity
            }
            return product
        }))
    }else{
        setCart([...cart, {...getProductById(id), quantity : quantity}])
        }  
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio*product.quantity)
        return total
    }

    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
           {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider