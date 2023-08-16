import React, { useState } from 'react'
import "./ContactPage.css"


const ContactPage = () => {
  const handleRegisterUser = (evento) => {
     evento.preventDefault()
     console.log("hola mundo")
   }
  
   return (
     <>
     <form onSubmit={handleRegisterUser} className='formularioUsuario'>
     <h2 className='titulo-contacto'>Contacto</h2>
         <label htmlFor="nombre">Ingrese su nombre</label>
         <input type= "text" placeholder='Ingrese su nombre' name='nombre' id='nombre' required/>
         <label htmlFor="apellido">Ingrese su apellido</label>
         <input type="text" placeholder='Ingrese el apellido' name='apellido' id='apellido' required/>
         <label htmlFor="email">Ingrese su email</label>
         <input type="email" placeholder='cosmefulanito@gmmail.com' name='email' id='email' required/>
         <button type='submit'>Enviar</button>
     </form>
     </>
   )
 }
 
 export default ContactPage