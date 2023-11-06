
import { Button, Container, Nav, Navbar, Card, Col, Table, Row, CardHeader } from 'react-bootstrap';
import './App.css';
import {productsArr} from './ProductsArr/productsArr';
import { useState } from 'react';
import Cart from './Components/Cart';
// import Product from './Components/Products';

function App() {

  const [shows,setShows]=useState(false);

  const show=()=>{
    setShows(true);
  }

  const onHide=()=>{
    setShows(false)
  }




  return (
    <>
      <Navbar sticky="top" bg='black' variant='dark' color='white' >
        <Container  >

          <Nav className='mx-auto'>
            <Nav.Link href='#home' className="mx-lg-5 mx-sm-3">HOME</Nav.Link>
            <Nav.Link href='#store' className="mx-lg-5 mx-sm-3">STORE</Nav.Link><Nav.Link href='#about' className="mx-lg-5 mx-sm-3">ABOUT</Nav.Link>
          </Nav>
          <Button onClick={show} >Cart</Button>
          <p style={{ color: 'white', margin: '3px' }}>0</p>
        </Container>
        <Cart shows={shows} onHide={onHide}/>
      </Navbar>
      {/* {productsArr.map(item=>{
        return <Product item={item} />}
      )} */}
      <Container className='d-flex  align-items-center justify-content-center'>
        <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>
          
          {productsArr.map(item => {
            return <Col md='4' className='d-flex  align-items-center justify-content-center'>
              
              <Card className='border-0 ' style={{ width: '18rem' }}>
                <Card.Header className='p-0 d-flex flex-column justify-content-center align-items-center bg-white mb-3'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Img variant="top" src={item.imageUrl} />

                </Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  
                  <Card.Text>
                    
                  ${item.price}
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
             
            </Col>
          })}
        
          </Row>
      </Container>

    </>
  );
}

export default App;
