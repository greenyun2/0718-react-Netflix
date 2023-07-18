import React, { useEffect,  CSSProperties } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../Components/Banner';
import MovieSlide from '../Components/MovieSlide';
import { ClipLoader } from "react-spinners";



const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if(loading) {
    return (
      <div>
        <ClipLoader
          className='loader'
          color="#f00"
          loading={loading}
          size={150}
        />
      </div>
    ) 
  };

  return (
    <div className="slide">
      <Banner movie={popularMovies.results[0]}/>
      <h1>Popular Movie</h1>
      <MovieSlide  movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide  movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide  movies={upComingMovies}/>
    </div>
  );
};
// 
export default Home;
