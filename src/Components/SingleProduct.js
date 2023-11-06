
import { Button, Container, Nav, Navbar, Card, Col, Table, Row, CardHeader } from 'react-bootstrap';
import cartContext from '../store/cart-context';
import { useContext } from 'react';

const SingleProduct =(props)=>{


    const crtContext=useContext(cartContext);

  const addToCart=(item)=>{
    let p={...item}
    crtContext.addToCart({...item})
    // console.log('adding ',p)
  }

    return <><Col md='4' className='d-flex  align-items-center justify-content-center'  key={Math.random().toString()}>
              
              <Card className='border-0 ' style={{ width: '18rem' }} key={'1'+Math.random().toString()}>
                <Card.Header className='p-0 d-flex flex-column justify-content-center align-items-center bg-white mb-3'>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Img variant="top" src={props.item.imageUrl} />

                </Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  
                  <Card.Text>
                    
                  ${props.item.price}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{addToCart(props.item)}}>Add to Cart</Button>
                </Card.Body>
              </Card>
             
            </Col></>


}

export default SingleProduct