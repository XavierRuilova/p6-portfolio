import React from 'react'
import './progressbar.css'

const ProgressBar = ({value}) => {
  return (
    <div className="progress">
    <div className="progress-bar" style={{width: value}}>
        <span className="progress-bar-text">{value}</span>
    </div>
</div>
  )
}

export default ProgressBar