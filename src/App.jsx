//dependencies
import { Outlet } from 'react-router-dom'
//components
import {NavBar, Footer} from './layout/index'
//state
import CartState from './context/CartState'

function App() {
  return (
      <>
        <CartState>
          <NavBar/>
          <main className='d-flex flex-column align-items-center p-5 main-container justify-content-center'>
            <Outlet/>
          </main>
        </CartState>
        <Footer/>
      </>
  )
}

export default App