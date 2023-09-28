import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/cartContext';

const CartWidget = () => {
  const {totalItems} =  useCartContext()
  const [productsTrack, setProductsTrack] = useState('')
  useEffect(()=>{
    const timer = setTimeout(() => {
      setProductsTrack('')
    }, 1000);
    return () => clearTimeout(timer), setProductsTrack('shake');

  },[totalItems()])

  return (
      <div className='pokewidget d-flex align-items-center justify-content-between'>
        <div className={`pokeball ${productsTrack}`}/>
        {totalItems() > 0 && <span className='pokewidget-counter'>{totalItems()}</span>}
      </div>
  )
};


export default CartWidget