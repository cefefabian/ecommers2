import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Card from '../product/Card'
import Description from '../product/Description'
import Productos from '../product/Productos'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Productos/>}/>

        <Route path='description/:id' element={<Description/>}/>
    </Routes>
  )
}

export default Routers