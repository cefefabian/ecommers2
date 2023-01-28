import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscador } from '../redux/productosSlice'

const Input = () => {
  const [search, setSearch] = useState()
  const {productos} = useSelector(state=> state.productos)
  const dispatch = useDispatch()
// console.log(search.Buscador);

useEffect(() => {
  if (search) {
    console.log(search);
    dispatch(buscador(search.Buscador))
  }

}, [search])

const inputChange = ({target}) =>{
  
    setSearch({
      ...search,
      [target.name] : target.value
    })
  }
  return (
    <form className='buscador'>
      <input
        onChange={inputChange}
        // value={search}
       placeholder='Category'
        type="text"
        name="Buscador"
        id=""
        className='search'/>
      <button>Buscar</button>
    </form>
    
  )
}

export default Input