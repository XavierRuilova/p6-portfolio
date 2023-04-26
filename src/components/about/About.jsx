import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="aboutme" id='aboutme'>
	<div className="content-section">
		<h2 className='section-title'> Sobre mí</h2>
		<h3>Detalles personales</h3>

		<p className="special">
			Me dedico al desarrollo de aplicaciones web
		</p>
		<p>He desarrollado aplicaciones utilizando HTML 5, CSS 3, Javascript, bases de datos no relacionales como MongoDB o FIrestore.</p>
		<div className="row">
			<div className="column">
				<span className="detail-title">
					Perfil
				</span>
				<p>Soy Ingeniero Informático de gestión, apasionado por las lenguas extranjeras me dediqué a aprender varios idiomas como: inglés, francés, italiano, mandarín y árabe. Luego surgió con los avances surgieron varias ideas que necesiaba plasmar por lo cual decidí convertirme en desarrollador web Full Stack. Los lenguajes de programación son otros idiomas agregados a mi passion ya que son la forma de comunicarse en la informática.</p>
			</div>

			<div className="column">
				<span className="detail-title">
					Ubicación
				</span>
				<p>Guayaquil, Ecuador</p>
			</div>

			<div className="column">
				<span className="detail-title">
					Intereses
				</span>
				{/* <p>Lenguas y civilizaciones extranjeras</p> */}
				<ul style={{textAlign:'initial'}}>
					<li>Lenguas, culturas y civilizaciones extranjeras</li>
					<li>Desarrollo web</li>
					<li>Meditación</li>
					<li>Artes marciales</li>
				</ul>
			</div>
		</div>
	</div>
</section>
  )
}

export default About