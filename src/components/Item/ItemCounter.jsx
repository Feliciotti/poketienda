import { useState } from "react"
//components
import './Item.css'
import Counter from '../helpers/Counter'

export const ItemCounter = ({item, onAdd }) => {
    const [count, setCounter] = useState(1);

  return (
    <div className='item-counter d-flex flex-column align-items-center'>
        <p className="fs-2 item-price"></p>
        <div className="counter-container d-flex align-items-center justify-content-around">

            <Counter item={item} count={count} setCounter={setCounter} cartView={false}/>

        </div>

        <div className="addToCart-container">
            <button id="addToCart-bttn" onClick={()=> onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>
  )
}