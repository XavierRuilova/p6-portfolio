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
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis itaque possimus quos dolores at non eligendi quod doloribus vitae laboriosam, asperiores enim rem molestiae, vel amet facilis consequuntur modi tempore?</p>
			</div>

			<div className="column">
				<span className="detail-title">
					Ubicación
				</span>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis itaque possimus quos dolores at non eligendi quod doloribus vitae laboriosam, asperiores enim rem molestiae, vel amet facilis consequuntur modi tempore?</p>
			</div>

			<div className="column">
				<span className="detail-title">
					Intereses
				</span>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis itaque possimus quos dolores at non eligendi quod doloribus vitae laboriosam, asperiores enim rem molestiae, vel amet facilis consequuntur modi tempore?</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default About