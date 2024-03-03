import React from 'react'
import './Avatar.css'
////// this avatar compo is just to sned the img as a prop inside thr useritem.jsx

const Avatar = (props) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
        <img 
        src={props.image}
        alt={props.alt}
        style={{width: props.width,  height: props.width }} />
    </div>
  )
}

export default Avatar

