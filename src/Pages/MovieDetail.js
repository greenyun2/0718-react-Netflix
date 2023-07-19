import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Badge } from 'react-bootstrap';
import { ClipLoader } from "react-spinners";


const MovieDetail = () => {
  const location = useLocation();
  const movieItem = location.state.item;

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate()
  const {genreList, loading} = useSelector((state) => state.movie);

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
  } else {
    return (
      <div className='MovieDetail'> 
        <div className='detail-contents'>
          <div
          className='detail-background'
          style={{
            backgroundImage:
              'URL(' +
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieItem.backdrop_path}` +
              ')',
          }}
          >
          <div className='detail-item'>
            <div 
            onClick={() => navigate(-1)}
            className='x-icon-box'>
                <div className='x-icon-background'>
                  <FontAwesomeIcon className='x-icon' icon={faCircleXmark}/>
                </div>
              </div>
            </div>
          </div>

        <div className='detail-info'>

          <div className='detail-left'>

          <div className='detail-title'>
            <h1>{movieItem.title}</h1>
          </div>

          <div className='detail-date'>
            <h2>{movieItem.release_date}</h2>
          </div>

          <div className='detail-desc'>
            <h4>{movieItem.overview}</h4>
          </div>
          </div>

          <div className='detail-genre detail-right'>
              {movieItem.genre_ids.map((it) => (
                <Badge bg='danger'>
                  {genreList.find((genreItem) => it === genreItem.id).name}
                </Badge>
              ))}
          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default MovieDetail;