import React from 'react'
import './experience.css'
import BadgeLanding from '../badges/BadgeLanding'



const Experience = () => {
  return (
    <section className="experience" id="experience">
        <div className="content-section	">
            <h2 className="section-title">Resumen</h2>
            <h3>Mis logros y experiencia</h3>
            <div className="info">
                <div className="column">
                    <span className="title">Insignias</span>
                <BadgeLanding/>
                    <table>
                        <tr>
                            <td className="period">
                                <h3>Landing de venta</h3>
                            </td>
                            <td rowspan="2" className="description">
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div><BadgeLanding/></div>
                            
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td className="period">
                                <h3>2010 - 2015</h3>
                            </td>
                            <td rowspan="2" className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at soluta quos explicabo dolor recusandae, dolorum.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Exper</h4>
                                <p>Udemy Cursos</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="column">
                    <span className="title">Proyectos</span>
                    <table>
                        <tr>
                            <td className="period">
                                <h3>3 Años</h3>
                            </td>
                            <td rowspan="2" className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at soluta quos explicabo dolor recusandae, dolorum.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>titulo</h4>
                                <p>Programador Junior</p>
                               
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td className="period">
                                <h3>2 Años</h3>
                            </td>
                            <td rowspan="2" className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at soluta quos explicabo dolor recusandae, dolorum.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Software Inc.</h4>
                                <p>Diseñadr Principal</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience