import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({pokemon}) => {
  return (
    /* link to ItemDetailContainer.jsx */
    <Link className='item-card-container' to={`/item/${pokemon.id}`}>
      <Card style={{width: '18rem', height: '25rem'}} className='item-card p-2 bg-transparent'>
        <div className='card-imgContainer d-flex'>
          <Card.Img className='card-img' variant="top" src={pokemon.img} />
        </div>
        <Card.Body className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <Card.Title>{pokemon.product}</Card.Title>
          <Card.Text>${pokemon.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export {Item}