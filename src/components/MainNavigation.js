import React from 'react'; 
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div> <h1>React Header</h1></div>
      <nav>
        <ul>
          <li>
            <Link to='/'>HomeScreen</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation