import React from "react"
import "./heading.css";
const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h3 className="Abouth1" >{subtitle} </h3>
        <h1 className="Abouth2">{title} </h1>
      </div>
    </>
  )
}

export default Heading
