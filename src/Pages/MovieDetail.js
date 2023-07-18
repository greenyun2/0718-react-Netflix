import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const {popularMovies, topRatedMovies, upComingMovies, genreList} = useSelector((state) => state.movie);
  const [movieData, setMovieData] = useState(null);

  console.log("인기영화", popularMovies)
  const popularList = popularMovies.results.map((it) => it);
  console.log("인기영화 배열객체", popularList);
  const topRatedList = topRatedMovies.results.map((it) => it);
  const upComingList = upComingMovies.results.map((it) => it);
  const allMovieContent = popularList.concat(topRatedList, upComingList);
  console.log("영화 콘텐츠", allMovieContent );
  // console.log("인기영화", popularMovies);
  // console.log("탑레이티드", topRatedMovies);
  // console.log("업커밍?", upComingMovies);
  // console.log("장르?",  genreList);
  // const popular = popularMovies.results.map((it) => it.id);
  // console.log("인기아이디값만 추출", popular);
  // const topRated = topRatedMovies.results.map((it) => it.id);
  // console.log("탑아이디값만 추출", topRated);
  // const upComing = upComingMovies.results.map((it) => it.id);
  // console.log("업아이디값만 추출", upComing);
  
  // const moviesId = popular.concat(topRated, upComing);
  // console.log("영화의 아이디값", moviesId);
  // const movieData = moviesId.find((it) => it.id === id);
  // console.log("영화데이터", movieData)

  // const onMatchingData = (movieId) => {
  //   const popular = popularMovies.results.map((it) => it.id);
  //   const topRated = topRatedMovies.results.map((it) => it.id);
  //   const upComing = upComingMovies.results.map((it) => it.id);
  //   const allMoviesId = popular.concat(topRated, upComing);
    
  //   if(allMoviesId.includes(movieId)) {
  //     return setCheckMoviesId(true)
  //   }
  // }

  useEffect(() => {
    const movie = allMovieContent.find((it) => it.id === Number(id));
    setMovieData(movie)
  }, [id, allMovieContent])

  if(!movieData) {
    return (
      <div className='MovieDetail'>
        <div>Loading...</div>
      </div>
    )
  } else {
    return (
      <div
      className='MovieDetail'
      style={{
        backgroundImage:
          'URL(' +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieData.poster_path}` +
          ')',
      }}
      >
        <div className='detail-item'>
        <h1>{movieData.title}</h1>
        <div>{movieData.adult ? "청불" : "청소년 시청 가능"}</div>
        <div>{movieData.overview}</div>
        <div>{movieData.release_date}</div>
        </div>
      </div>
    )
  }
}

export default MovieDetail;