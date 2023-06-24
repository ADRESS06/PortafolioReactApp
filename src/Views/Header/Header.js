import React from 'react'
import './Header.css'
import { HeartTwoTone } from '@ant-design/icons';
import { useState } from 'react';

const Header = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='Header'>

            <div className='logo'><h2>Y<span>J</span></h2></div>
            <div className='nav'>
                <div className='like'><HeartTwoTone style={{fontSize: '1.5em',}} onClick={handleClick} /> {count}Likes </div>
                <li><a href='#Home'>Ho<span>me</span></a></li>
                <li><a href='###'>About_me</a></li>
                <li><a href='###'>Portafolio</a></li>
                <li><a href='###'>Contact</a></li>
            </div>

    </div>
  )

}

export default Header