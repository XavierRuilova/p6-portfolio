import React from 'react'
import './card.css'

const Cards = (props) => {

    const {url, imgurl, titl} = props
  return (
    <div className='card'>
    <a className='cardAnchor' href={url} target='_blank'>
        <div >
            <img style={{width:'300px', height:'150px'}} src={imgurl} alt={titl} />
        </div>
        <div >
            <h4 style={{color:'black', textAlign:'center'}}>{titl}</h4>
        </div>
    </a>
    </div>

  )
}

export default Cards