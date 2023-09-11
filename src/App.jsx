import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//COMPONENTS
import NavBar from './components/Navbar/NavBar'
import {ItemListContainer} from './components/Item/ItemListContainer'
import {ItemDetailContainer} from './components/Item/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { Footer } from './components/Footer/Footer'
//CONTEXT
import CartState from './context/CartState'

function App() {
  return (
    <>
      <CartState>
        <BrowserRouter>

          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        
        </BrowserRouter>

      </CartState>
      <Footer/>
    </>
  )
}

export default App
