//dependencies
import { Link } from 'react-router-dom';
//components
import { AddRemoveBttn } from '../common/index'

const Item = ({pokemon}) => {
  let parentCard = 'hiddenBttn' //styles class to send by props
  return (
    <div className={`item-card fade-in ${pokemon.type}`}>
      {/* link to ItemDetailContainer.jsx */}
      <Link className='card-content' to={`/item/${pokemon.name}`}>
        {/* pokemon type used as class name for card background color */}
        <div className={`card p-3 ${pokemon.type}`}>

          <div className='card-titles'>
            <span className='h1'>{pokemon.name}</span>
            <span className='h5 card-number'>#{pokemon.number}</span>
          </div>
          <div className='card-img-container'>
            <img className='card-img' variant="top" src={pokemon.img} />
          </div>
          <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <span className='tittle h3 m-5'>${pokemon.price}</span>
          </div>
        </div>
      </Link>
      <AddRemoveBttn item={pokemon} bttnParent={parentCard}/>
    </div>
  )
}

export {Item}