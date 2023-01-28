import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProduct } from '../api/fetch';

const Description = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {productos, isLoading} = useSelector(state => state.productos)

    const data = productos.find((x)=> x.id == id)
    console.log(data, isLoading);

    const navigateHome = () =>{
        navigate('/')
    }


  return (
    <>
      <div className='home'>
          <Link to='/' >Home</Link>
      </div>
    <div className='decription-padre'>
      <div className='description-img'>
          <img src={data.image} alt="" />
      </div>
      <div className='description'> 
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h3>Price {data.price}$</h3>
      </div>
    </div>
    </>
  )
}

export default Description