import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(true);
  const [name, setname] = useState('')
  const [age, setage] = useState()
  const [voterList, setvoterList] = useState([])
 
  function onSubmit(){
    let obj = {name,age}
    console.log(obj)
    setvoterList([...voterList, obj])
    console.log(voterList)
  }
  function toggleStates() {
    setState((prevState) => !prevState);
  }
  return (
    <>
      <div className="card">
        <h2>React Hooks Exploration</h2>
        
        <div className="hook-container">
          <h3>useState hook in react</h3>
          <div>
            {state ? (
              <p>
                Hello, my name is sumaiya khan. I am a frontend developer,
                Exploring React.js Hooks for a better understanding.
              </p>
            ) : null}
            <button onClick={toggleStates} className="button">
              {state ? "Hide" : "show"}
            </button>
          </div>
          <div className="counter">
            <p style={{padding:'10px 20px',border:'1px solid gray',borderRadius:'5px', width:'min-content', textAlign:'center'}}>{count}</p>
            <div style={{display:'flex', gap:'10px'}}>
            <button onClick={()=>count<20?setCount(count+1):null}>Increment</button>
            <button onClick={()=>count>0?setCount(count-1):null}>Decrement</button>
            </div>
          </div>
          <div className="voterList">
            <div>
              <label htmlFor="name">Name: </label>
              <input onChange={(e)=>setname(e.target.value)} type="text" id="name" />
             
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <input onChange={(e)=>setage(e.target.value)} type="number" id="age" />
              
            </div>
            <button onClick={onSubmit} style={{width:'min-content'}} className="button">Submit</button>
            {voterList.length>0?<table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>age</th>
                </tr>
              </thead>
              {voterList.map((value)=>(
                <tbody>
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                  </tr>
                </tbody>
              ))}
            </table>:null
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
