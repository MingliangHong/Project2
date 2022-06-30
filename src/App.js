import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Detailpage from './Detailpage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path='/detailpage' element={<detailpage></detailpage>}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
