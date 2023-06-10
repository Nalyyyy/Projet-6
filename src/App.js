

import './styles/app.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Product from "./Routes/Product"
import Error from "./Routes/Error"
import Footer from './Routes/Footer';

function App() {
  return (
    <div className="App">

      {/* Navbar a chaque page pour etre refresh a chaque fois */}
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/product/:id" element= {<Product/>}/>
        <Route path="/*" element= {<Error/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
