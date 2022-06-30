import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Detailpage from './Detailpage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/detailpage' element={<Detailpage></Detailpage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
