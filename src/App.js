import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Detailpage from './Detailpage';
import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<><Navbar></Navbar> <Home></Home></>}></Route>
          <Route path='/detailpage' element={<><Navbar></Navbar><Detailpage></Detailpage></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
