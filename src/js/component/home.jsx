import React, { useState } from "react";

//Podría agregar un event-listener y de forma
//imperativa (DOM) generar un evento de "click"
//sobre el botón pero esto es REACT, seré declarativo.

const Home = () => {
  //let task = []; //Debo evitar este tipo de dato (array) ya que uso React.
  // Debo usar un estado (hook). No es Javascript a secas. Esto es JSX.

  const [inputField, setInput] = useState("");//Default.
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = () => {
    if(inputField === "") {alert("Please, write a task.")}
    else {const newTasks = [...tasks, inputField];
    //newTasks.push(inputField);
    setTasks(newTasks);
    setInput('');
    console.log(tasks);
  };
  };

  const inputChangeHandler = (event) => { //Seteo continuo.
    setInput(event.target.value);
    console.log(event.target.value);
  };

const deleteTask = (indexDelete) => {
    setTasks(prevState => prevState.filter((item, index)=>index!==indexDelete));
  };

  return (
    <>
      <div className="text-center">
        <h1>Todo-list</h1>
        <div>
          <input
            onChange={inputChangeHandler}
            type="text"
            placeholder="Write a task"
            value={inputField}
          />
          <button onClick={addTaskHandler}>Add task</button>
        </div>
      </div>
      <div className="text-center">
        <ul>
        {tasks.map((task, index)=>{return <li key={index}>{task} <button onClick={()=>deleteTask(index)}>x</button></li>})}
        </ul>
      </div>
    </>
  );
};

export default Home;