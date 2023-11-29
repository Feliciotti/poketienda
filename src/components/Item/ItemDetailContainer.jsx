import { useState } from "react"
// components
import ItemDetail from "./ItemDetail"
import { Loading } from "../common/index"
//hooks
import { useGetDB, useScrollTop } from "../../hooks/index"

const ItemDetailContainer = () => {
  useScrollTop()
  let [loading, setLoading] = useState(true)
  const [item, setItem] = useState({})

  useGetDB(setItem, setLoading)
  
  return (
    <>
      { loading ?
          <Loading />
        :
          <ItemDetail item={item[0]}/>
      }
    </>
    )
}


export {ItemDetailContainer}