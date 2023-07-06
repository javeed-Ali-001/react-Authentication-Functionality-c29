import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="list-container">
      <li className="list-items">
        <Link to="/">Home</Link>
      </li>
      <li className="list-items">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
