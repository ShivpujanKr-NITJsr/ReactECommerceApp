
import { Container,  Row } from 'react-bootstrap';
import './App.css';
import {productsArr} from './ProductsArr/productsArr';

import CartProvider from './store/CartProvider';

import SingleProduct from './Components/SingleProduct';
import NavBar from './Components/NavBar';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AppComponents from './Components/AppComponents';
import Home from './pages/Home';


function App() {



  return (
    <CartProvider>
      
      <NavBar />
      <Routes >
      <Route exact path='/' element={<AppComponents/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
      
      
    </CartProvider>
  );
}

export default App;
