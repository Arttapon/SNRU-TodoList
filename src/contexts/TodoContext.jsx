import { createContext, useEffect, useState } from "react"
import axios from "axios"

const apiUrl = 'http://localhost:8000/todos'
const TodoContext = createContext()

function TodoContextProvider(props) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)


  useEffect( ()=>{
    setIsLoading(true)
    axios.get(apiUrl).then( res=>{
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    axios.post(apiUrl,newJob).then(res=>{
      setTrigger(prv=>!prv)
    })
  }

  const hdlEdit = (id, updatedJob) => {
    axios.put(`${apiUrl}/${id}`, updatedJob)
    .then(res => {
      setTrigger(prv=>!prv)
    })
  }

  const hdlDel = (id) => {
    axios.delete(`${apiUrl}/${id}`)
    .then(res => {
      setTrigger(prv=>!prv)
    })
  }

  return (
    <TodoContext.Provider value={{todos: data, isLoading, hdlAdd, hdlEdit,hdlDel, task: data?.length }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {TodoContextProvider}
export default TodoContext