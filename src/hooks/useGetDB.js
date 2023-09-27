import { useEffect } from "react"
import { useParams } from "react-router-dom"
//db
import {collection, getDocs, query, where} from 'firebase/firestore/lite'
import db from "../firebase/config"

export const useGetDB = (setState, setLoad) =>{
  const productName = useParams().name

  useEffect(()=>{
    const queryCollection = productName ?
      query(collection(db, 'products'), where('name','==', productName))
    : 
      query(collection(db, 'products'))
    
      console.log(queryCollection);
    getDocs(queryCollection)
      .then(res => {
        setState(res.docs.map(doc =>({...doc.data(), id: doc.id})))
      })
      .catch(err => (err))
      .finally(() => setLoad(false))
  },[])
}