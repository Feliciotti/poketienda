import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cart/CartWidget'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar className='pokenav'>
        <Container className='pokenav-container'>
          <Navbar.Brand href="/">
            <img className='pokenav-logo' src="/Pokelogo.png" alt="" />
          </Navbar.Brand>
          <Nav className="pokenav-links">
            <NavLink className='pokenav-link' to='/'>
              Productos
            </NavLink>
            <NavLink className='pokenav-link' to='/contact'>
              Contacto
            </NavLink>
            <NavLink className='pokenav-link' to='/cart'>
              <CartWidget/>
              </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar