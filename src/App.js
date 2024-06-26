import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products'
import Services from "./components/pages/Services";
function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
