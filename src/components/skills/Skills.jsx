import React from 'react'
import './skills.css'
import ProgressBar from '../progress/ProgressBar'

const Skills = () => {
	const progress = {
		htmlcss: {title:'HTML/CSS', value:'30%'}, 
		javascript: {title:'JAVASCRIPT', value:'20%'},
		mongodb: {title:'MONGODB', value:'40%'},
		react: {title:'REACT', value:'40%'},
	}
  return (
    <section className="skills" id="skills">
	<div className="content-section">
		<h2 className="section-title">Mis habilidades</h2>
		<h3>Me especializo en:</h3>

		<div className="row">
			<div className="column">
				<span>
					{progress.htmlcss.title}
				</span>
				<ProgressBar value={progress.htmlcss.value}/>
			</div>

			<div className="column">
				<span>
				{progress.javascript.title}
				</span>
				<ProgressBar value={progress.javascript.value}/>
			</div>

			<div className="column">
				<span>
				{progress.react.title}
				</span>
				<ProgressBar value={progress.react.value}/>

			</div>

			<div className="column">
				<span>
				{progress.mongodb.title}
				</span>
				<ProgressBar value={progress.mongodb.value}/>

			</div>
		</div>
	</div>
</section>
  )
}

export default Skills