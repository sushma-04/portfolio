import React from 'react'
import {Link} from 'react-router-dom';
import "./Style.css";

const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light navb">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon nav-item" />
    </button>
    <div className="collapse navbar-collapse nav-item" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
        <Link className="nav-link active mx-5  nav-item" aria-current="page" to="/"><h3 className='nav-item'>Home</h3></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-5 nav-item" to="/about"><h3 className='nav-item'>About</h3></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-5" to="/skill"><h3 className='nav-item'>Skill</h3></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-5" to="/project"><h3 className='nav-item'>Project</h3></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-5" to="/contact"><h3 className='nav-item'>Contact</h3></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar