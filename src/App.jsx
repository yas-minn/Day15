import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import Portrait from './Pages/Portrait';
import Layout from './Pages/Layout';


import './App.css';

function App() {
 

  return (
 
    <BrowserRouter>
    <Routes> 
      
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Portrait/:id/:name' element={<Portrait/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
 
  )
}

export default App
