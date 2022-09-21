import { useEffect, useState } from "react";
import Header from "../component/Header";
import List from "../component/List";
import axios from 'axios'
export default function Home({type}) {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect( () => {
    const getList = async() => {
      try {
        const res = await axios.get(`http://localhost:5000/api/list${type ? '?type=' +type : ''}${genre ? '&genre = ' +genre : ''}`, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIzOTE4MTcxNjA3YThiMGY1YjAwZmEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjM1MjY0NTUsImV4cCI6MTY2Mzk1ODQ1NX0.kf3APObdUIC19Knurs2uJwECqp-I3yq3nXk-WoLhiyg"
          }
        })
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }    
    }
    getList()
  }, [type, genre])
  return (
    <div>
        <Header type={type} />
        {lists.map(list => 
          (<List list={list} key={list._id} />)
        )}
    </div>
  )
}
