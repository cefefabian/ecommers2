import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Description from './Description';


const Card = ({productos, productosFill, isLoading}) => {

  const navigate = useNavigate()

  const handleDescription = (id) =>{
    navigate(`/description/${id}`)
  }
  return (
    <div className='cards'>
        {
            productosFill.map((product)=> (
              <div className='card' key={productos.id} onClick={()=> handleDescription(product.id)}>
                <h3>{product.title}</h3>
                <img src={product.image} alt="mas sobre el producto" width='300px'/>
                <h4>Precio {product.price}$</h4>
              </div>
            ))

        }
    </div>
  )
}

export default Card