import { NavLink } from 'react-router-dom';
//components
import CartWidget from '../../components/Cart/CartWidget'

export const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary pokenav">
        <div className="container-fluid">
          <NavLink className='navbar-brand pokenav-link' to='/'>
            <img className='pokenav-logo' src="/Pokelogo.png" alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink className='pokenav-link' to='/'>
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='pokenav-link' to='/contact'>
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='pokenav-link' to='/cart'>
                  <CartWidget/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}