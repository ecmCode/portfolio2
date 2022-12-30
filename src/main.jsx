import React from 'react'
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { Admin, Blog, Home, NotFound, Projects} from './pages';
import { baseURL } from '../routeConfig'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode id="container">
      <BrowserRouter>
          <Routes>
            {/* Home page */}
              <Route exact path={baseURL}>
                <Route index element={<Home />} />
                {/* Admin & 404 pages */} 
                <Route path='projects' element={<Projects />} />
                <Route path='blog' element={<Blog />} /> 
                <Route path='admin' element={<Admin/>} />
                <Route path='404' element={<NotFound/>} />
                <Route path='*' element={<Navigate to='404' />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
