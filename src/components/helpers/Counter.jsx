import {useContext} from 'react'
import { CartContext } from "../../context/CartContext"

const Counter = ({item, cartView, count, setCounter}) => {
    const { addItem } = useContext(CartContext)
    
    let itemRequestLimit = count !== Number(item.stock)

    const restHandler = () =>{
        cartView ?
        addItem({...item, quantity: (itemRequestLimit && item.quantity - 1)})
        :
        // mientras value sea indistinto de 1 se ejecuta la función
        count !== 1 && setCounter(count - 1)
    }
    const handleAdd = () => {
        cartView ?
        addItem({...item, quantity: (item.quantity + 1)})
        :
        itemRequestLimit && setCounter(count + 1)
    }
  return (
    <>
        <span onClick={restHandler} className="counter-bttn">-</span>
        <span>
            {count}
        </span>
        <span onClick={handleAdd} className="counter-bttn">+</span>
    </>
  )
}

export default Counter