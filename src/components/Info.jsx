import React from 'react'

const Info = () => {
  return (
    <div className='info'>
        <div>
            <h1>Ecommers</h1>
        </div>
        <hr />
        <div className='proyecto'>
            <p>Este proyecto se trata de un ecommers echo con <b>react con vite, react router, redux toolkit, css puro y <a href="https://fakestoreapi.com/">Fake store api</a></b> la cual es una api que te devulve productos de todo tipo.</p>
            <p>Tiene busqueada con filtardo de categorias al momento, funcion para pedir a la api mas productos, tambien al hacer click en cualquier producto te dirije a la descripcion del mismo, ademas es 100% responsive</p>
        </div>
    </div>
  )
}

export default Info