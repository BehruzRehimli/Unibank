import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Cards from "./pages/Cards/Cards"
import Basket from "./pages/Basket/Basket"
import Ibank from "./pages/Ibank/Ibank"
import Human from "./pages/HumanRes/Human"


function App() {
  if(localStorage.getItem("cards")===null){
    localStorage.setItem("cards",JSON.stringify([]));
  }
  return (
    <>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/ibank' element={<Ibank/>}/>
          <Route path='/human' element={<Human/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;

