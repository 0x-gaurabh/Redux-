import React, { useEffect } from 'react';
import MpvieListing from '../../components/movieListing/MpvieListing'
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/movie/movieSlice';

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`);
        dispatch(addMovies(response.data.Search)); // Access the correct property 'Search' from the response
      } catch (err) {
        console.error('error:', err);
      }
    };

    fetchMovies();
  }, [dispatch, movieText]); // Added dependencies

  return (
    <div>
      <div className="banner-img">
        <MpvieListing  />
      </div>
    </div>
  );
}

export default Home;
