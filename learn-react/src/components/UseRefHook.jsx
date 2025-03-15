import React, { useState ,useRef } from 'react'
import PreviousValue from './Counter(ref)';

const UseRefHook = () => {
    const name = useRef(null)
const submitForm = (event) =>{
    event.preventDefault();
    console.log(name.current.value)
}
// const countRef = useRef(0); // Ref initialize kiya
//   const [renderCount, setRenderCount] = useState(0);

//   const increment = () => {
//     countRef.current += 1; // Ref value update hogi, but re-render nahi hoga
//     console.log("Ref Count:", countRef.current);
//   };

  return (
    <div className="hook-container">
        <h3>UseRef Hook in React</h3>
        <form action="" onSubmit={submitForm}>
           <div>
           <label htmlFor="name">Name: </label>
           <input ref={name} type="text" id="name" />
           </div>
           <button style={{marginTop:'20px'}}>submit</button>
        </form>
        <PreviousValue/>
    </div>
  //   <div>
  //   <p>Render Count: {renderCount}</p>
  //   <button onClick={increment}>Increment Ref</button>
  //   <button onClick={() => setRenderCount(renderCount + 1)}>
  //     Re-render
  //   </button>
  // </div>
  )
}

export default UseRefHook