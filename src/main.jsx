import React from 'react'
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import Header from './Header'
import Home from './Home'
import NotFound from "./NotFound";
import Admin from './Admin';
import Projects from './Projects';
import Blog from './Blog';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode id="container">
      <BrowserRouter>
          <Header />
          <Routes>
            {/* Home page */}
              <Route exact path='/portfolio'>
                <Route index element={<Home />} />
                <Route path='projects' element={<Projects />} />
                <Route path='blog' element={<Blog />} /> 
                {/* Admin & 404 pages */} 
                <Route path='admin' element={<Admin/>} />
                <Route path='404' element={<NotFound/>} />
                <Route path='*' element={<Navigate to='404' />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
