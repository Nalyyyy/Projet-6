import './styles/app.scss';
import {Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Product from "./Routes/Product"
import Navbar from "./Routes/Navbar"
import Error from "./Routes/Error"
import Footer from './Routes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/product" element= {<Product/>}/>
        <Route path="/*" element= {<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
