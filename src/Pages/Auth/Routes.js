import React from 'react'
import Signin from './Signin/Signin'
import { Route, Routes } from 'react-router-dom'

export default function Index() {
  return (
    <Routes>
        <Route path='signin' element={<Signin/>}/>
    </Routes>
  )
}
