import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">My Project</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        <Link class="nav-link" to="/home">Home</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Froms
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/controlledform">Controlled Form</Link>
          <Link class="dropdown-item" to="/uncontrolledform">Uncontrolled Form</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/post">Posts</Link>
      </li>
    
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Nav
