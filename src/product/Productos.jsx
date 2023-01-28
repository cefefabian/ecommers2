import React from 'react'
import { useEffect } from 'react'
import { fetchProduct } from '../api/fetch'
import { setProductos } from '../redux/productosSlice'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import Info from '../components/Info'
import NavBar from '../components/NavBar'

const Productos = () => {
    const {productos, productosFill, isLoading, page} = useSelector(state => state.productos)
    const dispatch = useDispatch()
    const verMas = () =>{
      dispatch(fetchProduct(page))
    }
    
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    
  return (
    <>
        <NavBar/>
        <Info/>
        {
          isLoading ?
          (<div class='spinner'></div>)
    
          :<>
            <Card productos={productos} productosFill={productosFill} isLoading={isLoading}/>
            <button onClick={verMas} className='mas'>Ver mas productos</button>
          </> 
        }
        
    </>
  )
}

export default Productos