import React from "react"
import { Container, Row } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { productsArr } from "../ProductsArr/productsArr"

const AppComponents =(props)=>{



    return <Container className='d-flex  align-items-center justify-content-center'>
    <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>
      
      {productsArr.map(item => {
        return <SingleProduct item={item} key={Math.random().toString()+'12'}/>
      })}
    
      </Row>
  </Container>

}


export default AppComponents