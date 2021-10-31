import React from 'react'
import Row from '../../components/Row'
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import requests from '../../utils/requests'
import './styles.css'

function HomeScreen() {

  return (
    <div className='home'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Les plus gros succès sur Netflix' fetchUrl={requests.fetchTopRated} />
      <Row title='Tendances actuelles' fetchUrl={requests.fetchTrending} />
      <Row title='Comédies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Action et aventures' fetchUrl={requests.fetchActionMovies} />
      <Row title='Romantique' fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Films d'horreur et surnaturel" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default HomeScreen;