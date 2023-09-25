import { Item } from "../Item/Item";
import './Item.css'

const ItemList = ({pokemonList}) => {
   return(
      <div className="itemList d-flex justify-content-center p-2 gap-5 flex-wrap">
         {pokemonList.map((pokemon)=>{
               return(
                  //key attribute is required by React
                  <Item key={pokemon.id} pokemon={pokemon}/>
               )
            })
         }
      </div>
   )
}

export { ItemList }