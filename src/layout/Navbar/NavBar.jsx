import { NavLink } from 'react-router-dom';
//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//styles
import './NavBar.css'
//components
import CartWidget from '../../components/Cart/CartWidget'

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