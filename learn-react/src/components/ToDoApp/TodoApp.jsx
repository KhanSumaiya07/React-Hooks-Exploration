import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return; // Prevent adding empty tasks

    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, task];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Store updated tasks immediately
      return updatedTasks;
    });

    setTask(""); // Clear input field
  };

  const removeTask = (index) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Store updated tasks
      return updatedTasks;
    });
  };

  return (
    <div>
      <div id="to-do-container">
        <h2>To-Do App</h2>
        <div className="addTask">
          <input
            value={task}
            type="text"
            placeholder="Add a task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="addBtn" onClick={addTask}>Add</button>
        </div>
        <div>
          {tasks.length > 0 ? (
            tasks.map((value, index) => (
              <div className="addTask" key={index} >
                <p>{value}</p>
                <button className="remove" onClick={() => removeTask(index)} style={{ marginLeft: "10px" }}> <Trash2 size={20} color="red" /></button>
              </div>
            ))
          ) : (
            <p>No tasks yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
