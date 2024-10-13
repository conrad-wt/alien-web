import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Spinner } from 'react-bootstrap';
import BasicExample from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import useGetAliens from './fetchAliens';
import { Alien } from './Alien';

function App() {

  const getAliens = useGetAliens()

  if (getAliens.isLoading) {
    return <Spinner/>
  }

  if (getAliens.error) {
    return <div>
      {getAliens.error.name} - {getAliens.error.message} - {getAliens.error.stack}
    </div>
  }

  const mapAlien = (alien: Alien) => {
    return <div>
      {alien.id} - {alien.name} - {alien.tech}
    </div>
  }

  return (
    <div className="App">
      <BasicExample/>
      <h1>Aliens</h1>
      {getAliens.data?.map((alien) => mapAlien(alien))}
    </div>
  );
}

export default App;
