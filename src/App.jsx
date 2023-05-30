import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Sobre from "./Sobre";
import Contato from "./contato";
import "bootstrap"
import './App.css'



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
