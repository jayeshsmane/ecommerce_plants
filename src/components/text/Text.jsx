import React from 'react'
import "./Text.css"

const Text = (props) => {
    const {className, text, inputClass} = props.textData;
  return (
    <div className="app-container text-align" id={inputClass ? inputClass : ''}>
      {/* pass classname as props to give font size */}
        <p className={className}>{text}</p>
        <div className="inputAndBtn">
          <input type="text" placeholder='Enter your mail here'/>
          <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Text
