
import { Button, Container, Nav, Navbar, Card, Col, Table, Row, CardHeader } from 'react-bootstrap';

import { useContext, useState } from 'react';


import cartContext from '../store/cart-context';
import Cart from './Cart';
const NavBar=(props)=>{

    const [shows,setShows]=useState(false);
  
    const ctxContext=useContext(cartContext)
    
    const show=()=>{
      setShows(true);
    }
  
    const onHide=()=>{
      setShows(false)
    }
  
    let q=ctxContext.quantity


    return <Navbar sticky="top" bg='black' variant='dark' color='white' >
    <Container  >

      <Nav className='mx-auto'>
        <Nav.Link href='#home' className="mx-lg-5 mx-sm-3">HOME</Nav.Link>
        <Nav.Link href='#store' className="mx-lg-5 mx-sm-3">STORE</Nav.Link><Nav.Link href='#about' className="mx-lg-5 mx-sm-3">ABOUT</Nav.Link>
      </Nav>
      <Button onClick={show} >Cart</Button>
      <p style={{ color: 'white', margin: '3px' }}>{q}</p>
    </Container>
    <Cart shows={shows} onHide={onHide}/>
  </Navbar>

}

export default NavBar