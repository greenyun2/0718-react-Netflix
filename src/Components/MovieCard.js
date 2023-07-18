import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


// MovieSlide => item
const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`)
  }

  return (
    <div 
    onClick={() =>  handleMovieClick(item.id)}
    className='card' 
    style={{backgroundImage: 
      'url(' + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + ')',
      }}
      >
        <div className='overlay'>
          <h1>{item.title}</h1>
          <div>
            {item.genre_ids.map((genre_id) => (
              <Badge bg='danger'>
                {genreList.find((item) => item.id === genre_id).name}
              </Badge>
            ))}
          </div>
          <div>
            <span>{item.vote_average}</span>
            <span>{item.adult ? "청불" : "Under18"}</span>
          </div>
        </div>
    </div>
  )
}

export default MovieCard;