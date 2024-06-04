import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/movie/movieSlice'
import MovieCard from '../movieCard/MovieCard'

const MpvieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        
        {
          movies.map((item,index) =>{
           return(
           < div className="movie-container"> 
            <MovieCard key={index} data={item} />
           </div>

            )
            })  
        }

      
      </div>
     
      
    </div>
  );
}


export default MpvieListing
