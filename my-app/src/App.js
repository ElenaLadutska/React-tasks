import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import './styles/App.css';
import Movies from './Movies';
import Movie from './components/Movie';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

const App = () => {
  const [city, setCity] = useState("1");

  return(
  <>
    <Routes>
      <Route path='/' element={<Layout city={city} setCity={setCity}/>}>
        <Route index element={<Movies city={city}/>} />
        <Route path='movie-description/:id' element={<Movie city={city}/>} />
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  </>
)};

export default App;
