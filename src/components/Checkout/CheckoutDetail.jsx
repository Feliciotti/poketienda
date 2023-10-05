const CheckoutDetail = ({productsReq}) => {
  return (
    <>
      <p>{productsReq.quantityReq} - {productsReq.name} ${productsReq.totalValue}</p>
    </>
  )
}

export default CheckoutDetail