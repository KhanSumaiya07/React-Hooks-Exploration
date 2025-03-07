import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  const[loader, setLoader] = useState(0)
  // const[count, setCount] = useState(0)

  // useEffect(()=>{
  //   console.log("first effect")
  //   if(count > 0){
  //     document.title = `chats (${count})`
  //   }
  // },[count])
  // useEffect(()=>{
  //   console.log("second effect")
  // },[])
  useEffect(()=>{
    if(loader>=100){
      return;
    }
    setTimeout(()=>{
      setLoader((prev)=>prev + 1)
    },1000)
  })
  // console.log("outside")
  return (
    <div className="hook-container">
      <h3>useEffect hook in react</h3>
      <div className="loader">
        <p>{loader}</p>
      </div>
      {/* <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Click</button> */}
    </div>
  )
}

export default UseEffectHook