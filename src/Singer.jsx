import React from 'react'

const Singer = ({name, genre, albums}) => {
  return (
    <div>
      <h2>Singer Name: {name}</h2>
      <p>Genre: {genre}</p>
      <p>Albums:</p>
      <ol>
       {albums.map((album, index) => (
        <li key={index} >{album}</li> 
        ))}
      </ol>
    </div>
  )
}

export default Singer
