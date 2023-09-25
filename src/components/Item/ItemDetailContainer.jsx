import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// components
import ItemDetail from "./ItemDetail"
import useScrollTop from "../../hooks/useScrollTop"
// db
import {doc, getDoc} from 'firebase/firestore/lite'
import db from "../../firebase/config"

const ItemDetailContainer = () => {
  useScrollTop()
  const [item, setItem] = useState({})
  const id = useParams().id

  useEffect(()=>{
    const itemRef = doc(db, 'products', id)
    getDoc(itemRef)
      .then((res)=>{
        setItem(
          { ...res.data(), id: res.id}
        )
      })
  }, [id])

return (
  <>
    <ItemDetail item={item} itemId={id}/>
  </>
  )
}


export {ItemDetailContainer}