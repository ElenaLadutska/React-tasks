import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import './styles/App.css';
import Movies from './Movies';
import Movie from './components/Movie';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import SignIn from './components/Sign in';
import SignUp from './components/Sign up';

const App = () => {
  const [city, setCity] = useState("1");

  const [formType, setFormType] = useState("sign in");

  return (
  <>
    <Routes>
      <Route path='/' element={<Layout city={city} setCity={setCity}/>}>
        <Route index 
          element={<Movies 
          city={city}/>} 
        />

        <Route path='movie-description/:id' 
          element={<Movie 
          city={city} />} 
        />

        <Route path='authorization' 
          element={<SignIn 
          formType ={formType}
          setFormType={setFormType}/>} 
        />

        <Route path='authorization/creating' 
          element={<SignUp />} />

        <Route path='*' 
          element={<NotFound />}/>
      </Route>
    </Routes>
  </>
)};

export default App;
