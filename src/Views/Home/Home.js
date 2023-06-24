import React from 'react'
import './Home.css'
import { Button, Image } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Per from './Perfil.jpg'

function Home() {
  return (
    <div className='Home' id='Home'>
        <div className='Ho'>
        <div className='text'>
            <h1>Ho<span>la</span> So<span>y</span> Yoi<span>mar</span> Jul<span>io</span></h1>
            <p>Un desarrollador de Frontend en infinito proceso de expandir conocimientos, abierto a nuevas oportunidades de innovacion para mejorar siempre en el ambito profecional y laboral.</p>
            <Button type="primary" icon={<DownloadOutlined/>} size='large'>Download</Button>
        </div>
        </div>

        <div className='me'>

            <Image height={750} width={550}src={Per}/>

            
        </div>
    </div>
  )
}

export default Home