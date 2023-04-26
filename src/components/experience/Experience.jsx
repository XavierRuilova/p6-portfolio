import React from 'react'
import './experience.css'
import BadgeLanding from '../badges/BadgeLanding'
import Cards from '../cards/Cards'



const Experience = () => {
    const pages = [
        {title:'CRUD con localstorage', url:'https://xavierruilova.github.io/crudruilova/', imgurl:'https://i.ibb.co/7Qnnn2Q/crud.png'},
        {title:'Dashboard con API', url:'https://xavierruilova.github.io/proyecto3g7/', imgurl:'https://i.ibb.co/BcVWC5p/dashboard.png'},
        {title:'App para restaurante', url:'https://main--clever-lolly-752102.netlify.app/', imgurl:'https://i.ibb.co/71QNm8t/ecommerce.png'},
        {title:'App e-commerce', url:'https://mi-tienda-online.onrender.com/', imgurl:'https://i.ibb.co/L6CcNgL/ecommerce.png'},
    ]
  return (
    <section className="experience" id="experience">
        <div className="content-section	">
            <h2 className="section-title">Resumen</h2>
            <h3>Mis logros y experiencia</h3>
            <div className="info">
                <div className="column">
                    <span className="title">Proyectos</span>
                    <div className='cards'>
                    {pages.map((e, i)=>{
                        return <Cards key={i} url={e.url} imgurl={e.imgurl} titl={e.title}/>

                    })}
                    </div>
    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience