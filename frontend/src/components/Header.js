import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
      <div className="parent">
        <div className="text-xl child" style={{ color: "orange", textAlign: "center" }}>
          <header>3D Models application</header>
        </div>
      </div>


      <p className="text-green-400 text-4xl">List of all 3D models</p> <br />
      <div className="text-xl rounded-lg underline">
        <Link to="/contents">Click here to see them all!</Link> <br />
      </div>
    </div >
  )
}

export default Header
