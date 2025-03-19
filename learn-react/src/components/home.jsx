import { useTheme } from "./UseContextHook/ThemeProvider";

const Home = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div>
      <label>Toggle theme</label>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={darkMode}
        className="inputBox"
      />
      
    </div>
  );
};

export default Home;