import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './Page/Home.jsx';
import India from './Page/India.jsx';
import World from './Page/World.jsx';
import Politics from './Page/Politics.jsx';
import Sports from './Page/Sports.jsx';
import Technology from './Page/Technology.jsx';
import Bussiness from './Page/Bussines.jsx';
import { bussinessAxioss, homeAxioss, indiaAxioss, politicsAxioss, sportsAxioss, technologyAxioss } from './Api/apiService.js';




const router = createBrowserRouter(

  createRoutesFromElements(


    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} loader={homeAxioss} />
      <Route path='india' element={<India />} loader={indiaAxioss} />
      <Route path='World' element={<World />} loader={indiaAxioss} />
      <Route path='politics' element={<Politics />} loader={politicsAxioss} />
      <Route path='sport' element={<Sports />} loader={sportsAxioss} />
      <Route path='tech' element={<Technology />} loader={technologyAxioss} />
      <Route path='bussiness' element={<Bussiness />} loader={bussinessAxioss} />
    </Route>

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
