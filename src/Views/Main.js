import React from 'react';
import './Main.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Aboutme from './Aboutme/Aboutme';


const Main = () => (
  <div className='Main'>
      <Header/>
      <Home/>
      <Aboutme/>
  </div>
);

export default Main;