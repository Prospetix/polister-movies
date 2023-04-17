import { motion } from 'framer-motion'
import React from 'react'

function Name() {
    return (
        <div className='name'>
            <motion.h1
                drag='x'
                whileDrag={{cursor: "grabbing"}}
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0.2}
            >Polister movies
            </motion.h1>
            <p>best search engine for movies</p>
        </div>
    )
}

export default Name
