import React from 'react'

function Search({search, setSearch}) {
  console.log(search);
  return (
    <div className='searchbox'>
      <input className='search' 
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      type="text" placeholder='type and search' />
    </div>
  )
}

export default Search
