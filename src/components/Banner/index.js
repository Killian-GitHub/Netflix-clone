import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../../utils/requests'
import './styles.css'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3' + requests.fetchNetflixOriginals)
      .then((res) => {
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        )
      })
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h2 className="banner__description">
          {truncate(movie?.overview, 160)}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button">Lecture</button>
          <button className="banner__button">Plus d'infos</button>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  )
}

export default Banner
