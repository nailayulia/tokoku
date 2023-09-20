import { Routes, BrowserRouter, Route } from "react-router-dom"
import Login from "./components/pages/login"
import Register from "./components/pages/register";
import Navbar from "./components/Product/navbar";
import Banner from "./components/Product/banner";
import Kategori from "./components/Product/kategori";




function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} /> 
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/banner" element={<Banner/>} />
      <Route path="/kategori" element={<Kategori/>} />
     

     

  
    </Routes>
    </BrowserRouter>
  )
}

export default App;