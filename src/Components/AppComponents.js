import React, { useEffect, useRef, useState } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { productsArr } from "../ProductsArr/productsArr"





const AppComponents = (props) => {

  const [movies, setMovies] = useState([])

  const [loading, setLoad] = useState(false)

  const [error, setError] = useState(null)

  const [cancel, setCancel] = useState(true);

  // const [run,setRun]=useState(true)
  const runRef = useRef(false);

  const changing = useRef(true)

  async function fetchMoviesHandler() {

    setError(null)
    setLoad(true);
    // if(!run){
    //   setRun(true)
    //       return;
    //     }
    try {
      let response = await fetch('https://swapi.dev/api/film/')
      if (!response.ok) {
        throw new Error('SomeThing went wrong!')
      }
      let data = await response.json()
      // data.results;
      console.log(data.results)
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setLoad(false)
      setMovies(transformedMovies)
      setCancel(true)
      runRef.current = false;
    } catch (err) {
      setError(err.message)
      setLoad(false)
      if (changing.current) {
        runRef.current = true;
        console.log('errorrr')
        setCancel(false)
        return;
      } else {
        // setError(null)
        changing.current = true;
        console.log('no call again')
      }


    }

  }


  useEffect(() => {

    let id = null;
    console.log('wanted to run')
    if (runRef.current && error) {
      console.log('running')
      id = setInterval(() => {
        fetchMoviesHandler()
      }, 5000)

    } else {
      setError(null)
      // changing.current=true;
    }

    return () => {
      console.log('clearing interval')
      if (id !== null) {
        clearInterval(id)
        console.log('interval destroyed')
      }

    }
  }, [runRef.current])

  

  const change = () => {
    console.log('under change ', runRef.current)
    runRef.current = false;
    changing.current = false;
    setError(null)
    console.log(runRef.current + ' run')
  }

  return <Container className='d-flex  align-items-center justify-content-center'>

    <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>

      <button onClick={fetchMoviesHandler} disabled={loading && !error ? true : false} >{loading ? <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> : 'Get'} {loading && !error ? 'loading... Movies' : 'Movies'}
      </button>

      { }
      <section>
        {!loading && error && <div className="d-flex flex-row" style={{ textAlign: 'center' }}><p className="mx-5">{error} {` Retrying in 5 second`}</p><button onClick={change}>Cancel</button></div>}
      </section>

      {productsArr.map(item => {
        return <SingleProduct item={item} key={Math.random().toString() + '12'} />
      })}

    </Row>
  </Container>

}


export default AppComponents