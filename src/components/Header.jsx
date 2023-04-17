import { motion } from 'framer-motion'
import React from 'react'

function Header({heading, Search, clear}) {
  return (
    <div className='header'>
      <h3>{heading}</h3>
      {Search}
      {heading === 'favourites'
       && <motion.button whileHover={{scale: 1.1}}
       whileTap={{scale: 0.8}}
       onClick={clear}
      >clear all favourites</motion.button> }
    </div>
  )
}

export default Header
