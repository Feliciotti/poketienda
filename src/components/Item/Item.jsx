import './Item.css'
import AddRemoveBttn from '../AddRemoveBttn/AddRemoveBttn'
import { Link } from 'react-router-dom';

const Item = ({pokemon}) => {
  let parentCard = 'hiddenBttn'

  return (
    <div className='item-card '>
      {/* link to ItemDetailContainer.jsx */}
      <Link className='card-content' to={`/item/${pokemon.id}`}>
        <div className={'card p-3 ' + pokemon.type}>
          <div className='d-flex align-items-center justify-content-between'>
            <span className='h1'>{pokemon.name}</span>
            <span className='h5 card-number'>#{pokemon.number}</span>
          </div>
            <div className='card-img-container d-flex'>
              <img className='card-img' variant="top" src={pokemon.img} />
            </div>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <span className='h3 m-5'>${pokemon.price}</span>
          </div>
        </div>
      </Link>
      <AddRemoveBttn item={pokemon} bttnParent={parentCard}/>
    </div>
  )
}

export {Item}