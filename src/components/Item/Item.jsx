import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({pokemon}) => {
  return (

    <Card style={{ width: '18rem' }} className='item-card bg-transparent'>
      <div className='card-imgContainer d-flex'>
        <Card.Img className='card-img' variant="top" src={pokemon.img} />
      </div>
      <Card.Body className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <Card.Title>{pokemon.product}</Card.Title>
        <Card.Text>${pokemon.price}</Card.Text>
        <Link to={`/item/${pokemon.id}`}>
            <Button variant="secondary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
  ) //<Link to= ItemDetailContainer.jsx
}

export {Item}