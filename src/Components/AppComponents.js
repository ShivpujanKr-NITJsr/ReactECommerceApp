import React, {useState} from "react"
import { Container, Row } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { productsArr } from "../ProductsArr/productsArr"





const AppComponents =(props)=>{

  const [movies,setMovies]=useState([])

  async function fetchMoviesHandler(){
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
      setMovies(data.results)
    }
  

    return <Container className='d-flex  align-items-center justify-content-center'>
    <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>
      <button onClick={fetchMoviesHandler} >get Movies</button>
      {productsArr.map(item => {
        return <SingleProduct item={item} key={Math.random().toString()+'12'}/>
      })}
    
      </Row>
  </Container>

}


export default AppComponents