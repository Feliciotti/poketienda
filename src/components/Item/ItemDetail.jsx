//components
import { useNavigate } from 'react-router-dom'
import AddRemoveBttn from '../AddRemoveBttn/AddRemoveBttn'

const ItemDetail = ({item}) =>{
  let parentItemDetail = 'pokedex-bttn'
  let navigatehome = useNavigate()

  return(
    <section className="main-child">
      <div className='pokedex-container content-box'>
        <span className='pokedex-circle'></span>

        <div className='pokedex-left-wrapper'>
          <div className='borders-top-wrapper d-flex'>
            <span className='pokedex-left-border inner-border border--top1'/>
            <div className='borders-top-right d-flex'>
              <span className='pokedex-left-border inner-border border--top2'/>
              <span className='pokedex-left-border inner-border border--top3'/>
            </div>
          </div>

          <div className='pokedex-left-border inner-border img-container--borders'>
            <div className='pokedex-img-container'>
              <img className='pokedex-img' src={item.img} alt="" />
            </div>
          </div>
        </div>

        <div className='pokedex-hinge inner-border'>
          <div>
            <span className='hinge'></span>
            <span className='hinge'></span>
          </div>

          <div>
            <span className='hinge'></span>
            <span className='hinge'></span>
          </div>
        </div>

        <div className='pokedex-right-wrapper inner-border'>
          
          <h1 className='pokedex-title'>{item.name}</h1>

          <p className="pokedex-info fs-5">{item.desc}</p>

          <div className='d-flex align-items-center justify-content-between'>
            <div>
              <span className='pokedex-stock'>stock: </span>
              <span className='pokedex-stock'>{item.stock}</span>
            </div>
            <div className='pokedex-price-container'>
              <span className='price'>${item.price}</span>
            </div>
          </div>

          <div className='pokedex-bttns-container'>
            <button onClick={() => navigatehome(-1)} className={`item-bttn ${parentItemDetail} ${parentItemDetail}--on`}>volver</button>
            <AddRemoveBttn item={item} bttnParent={parentItemDetail}/>
          </div>
        </div>
            
      </div>
    </section>
  )
}

export default ItemDetail