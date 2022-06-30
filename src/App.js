import React from 'react';
import './App.css';
import Home from './Home';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Detailpage from './Detailpage';
import Navbar from './Navbar';
function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/detailpage' element={<Detailpage></Detailpage> }></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
