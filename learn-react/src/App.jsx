

import "./App.css";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  
  return (
    <>
      <div className="card">
        <h2>React Hooks Exploration</h2>
        
        <UseStateHook/>
        <UseEffectHook/>
      </div>
    </>
  );
}

export default App;
