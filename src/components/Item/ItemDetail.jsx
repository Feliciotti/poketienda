import { useContext } from "react"
import { useParams } from "react-router-dom"

//components
import { ItemCounter } from "./ItemCounter"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({item}) =>{

    const { addItem } = useContext(CartContext)
    const id = useParams().id


    const onAdd = (quantity) =>{
        addItem( {...item, quantity} )
    }

    return(
        <section id='item-detail' className="container-fluid d-flex justify-content-center align-items-center">
            <div className='detail-container d-flex'>

                <div className='detail-imgContainer d-flex align-items-center'>
                    <img className='detail-img w-100' src={item.img} alt="" />
                </div>
                <div className='detail-desc d-flex flex-column align-items-center justify-content-center'>
                    <div className="d-flex align-items-center">
                        <h4 className='item-title fs-1'>{item.product}</h4> <span>stock: {item.stock}</span>
                    </div>
                    <p className="fs-5">{item.desc}</p>

                    <ItemCounter item={item} onAdd={onAdd}/>
                </div>
                
            </div>
        </section>
    )
}

export default ItemDetail