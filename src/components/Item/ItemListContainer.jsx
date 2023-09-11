import { useEffect, useState } from 'react';
//components
import {ItemList} from './ItemList';
//db
import {collection, getDocs} from 'firebase/firestore/lite'
import db from '../../firebase/config'

//------------------------------------------------------------------

const ItemListContainer = () => {
    const [pokemonList, setPokemonList] = useState([])
    
    //api call
    useEffect(() => {
        const products = collection(db, 'products')//(database config, collection name)
        getDocs(products)
            .then((res) => {
                setPokemonList(res.docs.map((doc) =>{
                    //.data() retrieves all fields in the document as an object but it doesn't include the id given by firebase
                    return {...doc.data(), id: doc.id}
                    })
                );
            })
    },[])

    return (
        <section className='itemListContainer cointainer'>
            <ItemList pokemonList={pokemonList}/>
        </section>
    )
}

export {ItemListContainer}