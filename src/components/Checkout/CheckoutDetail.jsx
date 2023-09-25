const CheckoutDetail = ({productsReq}) => {
  return (
    <div className=''>
        <div>
          <p>{productsReq.quantityReq} - {productsReq.name} ${productsReq.totalValue}</p>
        </div>
    </div>
  )
}

export default CheckoutDetail