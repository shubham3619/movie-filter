import React from 'react'

const Genre = ({genres}) => {
  return (
    <div className='genre-container'>
        <h3>Filter By  Genre</h3>
        <ul>
            {genres.map((item, index)=> {
                return (
                    
                        <li key={index}>
                            <button onClick={()=>{
                                console.log("filtering by " + item)
                            }}>{item}</button>
                        </li>
                
                )
            })}
        </ul>
    </div>
  )
}

export default Genre