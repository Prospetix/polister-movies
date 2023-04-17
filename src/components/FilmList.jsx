import React from 'react'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'

function FilmList({ movies, addToFave, text }) {

  return (

    <motion.div className='box'
    >
      {movies.map((movie) => (
        <AnimatePresence key={movie.imdbID}>
          <motion.div
            layout
            exit={{ x: 100, transition: { duration: 1, delay: 3 } }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ease: easeInOut, duration: 0.6}}
            initial={{  y: -100 ,opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className='movie' key={movie.imdbID}>

            <img src={movie.Poster} alt=""  />
            <h6 className='title'>{movie.Title}</h6>

            <motion.div
              whileTap={{ scale: 0.5}}
              onClick={() => addToFave(movie)}
              className="overlay" key={movie.imdbID}>

              <h6>{text}</h6>
              <i className="fa-solid fa-heart fa-beat"></i>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ))}
    </motion.div>
  )
}

export default FilmList
