import React from "react";
import styles from "../css/AddTodo.module.css";
import { useRef,useState,useEffect } from "react";
import Todoapp from "./Todoapp";



const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  
    let taskInput = useRef(null);
function addTaskHandler()
    {
        const task = taskInput.current.value;
        if (task.trim() !== "") {
          const newTodos = [...todos, task];
          setTodos(newTodos);
          taskInput.current.value = ""; 
        }

    }
  return (
    <div className="container-hero">
    <div className={styles.container}>
      <h1>
        Manage your tasks <span className={styles.gray}>@Himanshu</span>
      </h1>
      <p className={todos.length === 0 ? "" : styles["display-none"]}>
        Start by adding your first task #taskmanager #productivity
      </p>
      
     {
        todos.map((todo,index)=>{
            return<Todoapp key={index} todo={todo} />
        })
     }

      <input ref={taskInput} placeholder="e.g. complete unit assignments" className={styles.input} />
      <button className={styles.btn} onClick={addTaskHandler}>Add New Task</button>



    </div>
    </div>
  );
};

export default AddTodo;