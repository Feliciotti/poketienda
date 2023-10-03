import { useCartContext } from '../../context/cartContext'
import './addRemoveBttn.css'

const AddRemoveBttn = ({item, bttnParent}) => {
  const { addItem, isInCart, removeItem } = useCartContext()
  
  const onAdd = () =>{
    addItem({...item, quantity: 1})
 }
  return (
    <>
      {!isInCart(item.id) ? (
          <>
            <button className={`item-bttn ${bttnParent} ${bttnParent}--on`} onClick={onAdd}>
                agregar al carrito
            </button>
          </>
      ):(
          <button className={`item-bttn ${bttnParent} ${bttnParent}--off`} onClick={() => removeItem(item)}>
            eliminar del carrito
          </button>
      )}
    </>
  )
}

export default AddRemoveBttn