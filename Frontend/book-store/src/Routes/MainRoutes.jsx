import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { BookList } from '../Pages/Product';
import { Signup } from '../Pages/Signup';


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<BookList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
       
    </Routes>
  )
}

