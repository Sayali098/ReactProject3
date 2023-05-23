import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Coindetails from "./components/Coindetails";
import Exchange from "./components/Exchange";
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
     
        <Route path='/exchange' element={<Exchange></Exchange>}></Route>
        <Route path='/coin/:id' element={<Coindetails></Coindetails>}></Route>

        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
