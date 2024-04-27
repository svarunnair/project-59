import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import PublicRoutes from './routes/PublicRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const[dataLng,setDataLng]=useState('')
  console.log("test",dataLng)

  const getFunc=(data)=>{
    console.log("GetLang......",data)
    setDataLng(data)
  }
  
  
  return (
    <div className="App">
    <Navbar lang={getFunc}/>
    <Footer lang={dataLng}/>

    </div>
  );
}

export default App;
