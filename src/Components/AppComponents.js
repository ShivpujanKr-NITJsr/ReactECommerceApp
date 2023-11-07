import React, {useState} from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { productsArr } from "../ProductsArr/productsArr"





const AppComponents =(props)=>{

  const [movies,setMovies]=useState([])

  const [loading,setLoad] =useState(false)

  async function fetchMoviesHandler(){
    setLoad(true);
    let response=await fetch('https://swapi.dev/api/films/')
    let data=await response.json()
    
      // data.results;
      console.log(data.results)
      const transformedMovies=data.results.map(movieData=>{
        return {
          id: movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })

      setLoad(false)
      setMovies(data.results)
    }
  

    return <Container className='d-flex  align-items-center justify-content-center'>
       
    <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>
      
      <button onClick={fetchMoviesHandler} disabled={loading} >{loading? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> : 'Get'} {loading? 'loading... Movies': 'Movies'}</button>
      
     
      {productsArr.map(item => {
        return <SingleProduct item={item} key={Math.random().toString()+'12'}/>
      })}
    
      </Row>
  </Container>

}


export default AppComponents