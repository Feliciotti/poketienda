import { useState } from 'react';
//hooks
import { useGetDB } from '../../hooks/index'
//components
import { ItemList } from './ItemList';
import Loading from '../Loading/Loading';

//------------------------------------------------------------------

const ItemListContainer = () => {
  const [pokemonList, setPokemonList] = useState([])
  let [loading, setLoading] = useState(true)

  useGetDB(setPokemonList, setLoading)

  return (
    <>
      { loading ?
       <Loading/>
      :
        <section className='itemListContainer cointainer'>
          <ItemList pokemonList={pokemonList}/>
        </section>
      }
    </>
  )
}

export {ItemListContainer}