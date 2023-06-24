import React from 'react'
import './Aboutme.css'
import { Image } from 'antd';
import ft from './ft.jpg'

const Aboutme = () => {
  return (
    <div className='Aboutme'>
        <div className='ft'>
        <Image height={550} width={550}src={ft} style={{borderRadius:'100%'}}/>

        </div>
        <div className='textoo'>
            <div className='text'>
              <h2>About me</h2>
              <div className='divider'/>
              <p><b>Animado siempre a aprender cada ves mas sobre el gran mundo de la tegnologia en general tengo un buen manejo en idiomas de programacion como python, java script y C cuento con certificado de programacion de software entregado por el sena y curso de programacion basica y muy buen nivel en la creacion de apps moviles con app inventor y he echo practicas en la fundacion IdTolu ubicada en santiago de tolu sucre donde aprendi a utilizar los frameworks de React, AntDesing y Framer motion. </b></p>
            </div>
        </div>
        

    </div>
  )
}

export default Aboutme