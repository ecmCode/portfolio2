import React from 'react'
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom";

import ReactDOM from 'react-dom/client'

import Header from './Header'
import Home from './Home'
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact'
import NotFound from "./NotFound";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
