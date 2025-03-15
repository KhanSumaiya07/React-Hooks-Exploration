import "./App.css";
import UseEffectHook from "./components/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <>
      <div className="card">
        <h2>React Hooks Exploration</h2>

        <UseStateHook />
        <UseEffectHook />
        <UseRefHook />
        <UseReducerHook />
       
      </div>
    </>
  );
}

export default App;
