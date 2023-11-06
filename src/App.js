
import { Button, Container, Nav, Navbar, Card, Col, Table, Row, CardHeader } from 'react-bootstrap';
import './App.css';
import {productsArr} from './ProductsArr/productsArr';

import Cart from './Components/Cart';
import CartProvider from './store/CartProvider';
import cartContext from './store/cart-context';
import SingleProduct from './Components/SingleProduct';
import NavBar from './Components/NavBar';

// import Product from './Components/Products';

function App() {

  
  
  // const changeQ=(v)=>{
  //   setQ(v)
  // }

  return (
    <CartProvider>
      <NavBar/>
      {/* {productsArr.map(item=>{
        return <Product item={item} />}
      )} */}
      <Container className='d-flex  align-items-center justify-content-center'>
        <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>
          
          {productsArr.map(item => {
            return <SingleProduct item={item} key={Math.random().toString()+'12'}/>
          })}
        
          </Row>
      </Container>

    </CartProvider>
  );
}

export default App;
