//dependencies
import { Outlet } from 'react-router-dom'
//components
import {NavBar, Footer} from './components/common/index'
//state
import CartState from './context/cartState'

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