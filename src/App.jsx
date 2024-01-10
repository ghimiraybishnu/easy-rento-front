import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'

import HomePage from "./Page/home/HomePage";
import PropertyPage from './Page/property/PropertyPage';

// routing and linking

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Page/Register/Register";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/property' element={<PropertyPage />}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    

    {/* <Property /> */}
    
    </>
   
  );
}

export default App;