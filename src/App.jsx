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
          <main className='main-container'>
            <Outlet/>
          </main>
        </CartState>
        <Footer/>
      </>
  )
}

export default App