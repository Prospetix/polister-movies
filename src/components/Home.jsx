import React from 'react'
import Header from './Header'
import FilmList from './FilmList'

export default function Home({ Search, movies, addToFave, remove, clear, moviesF }) {
    return (
        <div>
            <Header heading={'searched movies'} Search={Search} clear={clear} />

            {movies.length <= 0 ? <h1>no movie to display</h1> :
                <FilmList movies={movies} text={"add to favourite"} addToFave={addToFave} />
            }

            <Header heading={'favourites'} clear={clear} />

            {moviesF.length <= 0 ? <h3>no favourites to display</h3> :
                <FilmList movies={moviesF} addToFave={remove} text={"remove favourite"} />
            }
        </div>
    )
}
