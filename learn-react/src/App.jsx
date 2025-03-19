import "./App.css";
import Home from "./components/home";
import { ThemeProvider } from "./components/UseContextHook/ThemeProvider";
import UseEffectHook from "./components/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <ThemeProvider>
      <div className="card">
        <h2>React Hooks Exploration</h2>
        <Home/>
        <UseStateHook />
        <UseEffectHook />
        <UseRefHook />
        <UseReducerHook />
       
      </div>
    </ThemeProvider>
  );
}

export default App;
