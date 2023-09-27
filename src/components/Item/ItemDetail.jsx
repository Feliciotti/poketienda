//components
import AddRemoveBttn from '../AddRemoveBttn/AddRemoveBttn'

const ItemDetail = ({item}) =>{
  let parentItemDetail = 'toCart-bttn'
  return(
    <section className="main-child container-fluid d-flex justify-content-center align-items-center">
      <div className='detail-container d-flex'>

      <div className='detail-imgContainer'>
        <img className='detail-img w-100' src={item.img} alt="" />
      </div>
      <div className='detail-info-wrapper d-flex flex-column align-items-center justify-content-center'>
        <div className="d-flex align-items-center">
          <h4 className='item-title fs-1'>{item.name}</h4> <span>stock: {item.stock}</span>
        </div>
        <p className="fs-5">{item.desc}</p>
        <AddRemoveBttn item={item} bttnParent={parentItemDetail}/>
      </div>
            
      </div>
    </section>
  )
}

export default ItemDetail