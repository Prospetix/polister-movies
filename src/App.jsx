import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import FilmList from './components/FilmList'
import './App.css'
import Search from './components/Search';
import Name from './components/Name';



function App() {

  const [movies, setmovies] = useState([])
  const [search, setSearch] = useState('')
  const [favourite, setFavourites] = useState([])

  let url = `https://www.omdbapi.com/?s=${search}&apikey=59244570`;


  function saveFave(item) {
    localStorage.setItem('savedFave', JSON.stringify(item))
  }


  const render = async () => {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.Search);



    if (data.Search) {
      setmovies(data.Search)
    }

  }



  useEffect(() => {
    render()
    console.log(localStorage.getItem('savedFave'));
  }, [search])

  useEffect(() => {

    let getFave = JSON.parse(localStorage.getItem('savedFave'))
    console.log(getFave);
    setFavourites(getFave || [])
  }, [])



  const addToFave = (movie) => {
    const newFave = [...favourite, movie]
    let check = favourite.some(f => f.imdbID === movie.imdbID)
    !check && setFavourites(newFave)
    saveFave(newFave)
    console.log(newFave);
  }

  const removeFave = (movie) => {
    let newdFave = favourite.filter(fave => movie.imdbID !== fave.imdbID)
    setFavourites(newdFave)
    saveFave(favourite)
  }

  function clear(params) {
    setFavourites([])
    console.log('clear');
    saveFave([])
  }

  return (
    <div className='app'>
      <Name />
      <Header heading={'searched movies'}
        Search={<Search search={search} setSearch={setSearch} />} />

      {movies.length <= 0 ? <h1>no movie to display</h1> :
        <FilmList movies={movies} text={"add to favourite"} addToFave={addToFave} />}

      <Header heading={'favourites'} clear={clear} />
      {favourite.length <= 0 ? <h3>no favourites to display</h3> :
        <FilmList movies={favourite} addToFave={removeFave} text={"remove favourite"} />}
    </div>
  )
}

export default App