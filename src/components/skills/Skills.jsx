import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">
	<div className="content-section">
		<h2 className="section-title">Mis habilidades</h2>
		<h3>Me especializo en:</h3>

		<div className="row">
			<div className="column">
				<span>
					HTML/CSS
				</span>
				<div className="cont-bar">
					<div className="bar" id="html">
						{/* 17 barras */}
					</div>
					<span>98%</span>
				</div>
			</div>

			<div className="column">
				<span>
					JAVASCRIPT
				</span>
				<div className="cont-bar">
					<div className="bar" id="html">
						{/* 17 barras */}
					</div>
					<span>70%</span>
				</div>
			</div>

			<div className="column">
				<span>
					HTML/CSS
				</span>
				<div className="cont-bar">
					<div className="bar" id="html">
						{/* 17 barras */}
					</div>
					<span>98%</span>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Skills