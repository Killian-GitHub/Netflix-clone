import React from 'react'
import './App.css'
import Row from './components/Row'
import requests from './utils/requests'

require('dotenv').config()

function App() {

  return (
    <div className="App">
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
      <Row title='Docummentaires' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;