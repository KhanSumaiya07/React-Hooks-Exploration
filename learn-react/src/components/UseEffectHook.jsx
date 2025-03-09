import React, { useEffect, useState } from 'react'
import TodoApp from './ToDoApp/TodoApp'
import FetchData from './FetchData/FetchData'

const UseEffectHook = () => {
  const[loader, setLoader] = useState(0)
  const[count, setCount] = useState(0)

  useEffect(()=>{
    // console.log("first effect")
    if(count > 0){
      document.title = `chats (${count})`
    }
  },[count])
  useEffect(()=>{
    // console.log("second effect")
  },[])
   useEffect(()=>{
    if(loader>=100){
      return;
    }
    setTimeout(()=>{
      setLoader((prev)=>prev + 1)
    },1000)
  }) 
  
  const[windowWidth, setWindowWidth] = useState(window.screen.width)
  let actualWidth = () =>{
    setWindowWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize", actualWidth)
    return()=>{
      window.removeEventListener("resize", actualWidth)
    }
  })
  
  return (
    <div className="hook-container">
      <h3>useEffect hook in react</h3>
      <h1>{windowWidth}</h1>
      <div className="loader">
        <p>{loader}</p>
      </div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Click</button>
     <TodoApp/>
     <FetchData/>
    </div>
  )
}

export default UseEffectHook