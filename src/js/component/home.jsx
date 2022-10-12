import React, { useState } from "react";
import PropTypes from "prop-types";

//Podría agregar un event-listener y de forma
//imperativa (DOM) generar un evento de "click"
//sobre el botón pero esto es REACT, seré declarativo.

const Home = () => {
  let task = []; //Debo evitar este tipo de dato (array) ya que uso React.
  // Debo usar un estado (hook). No es Javascript a secas. Esto es JSX.

  const [inputField, setInput] = useState("");//Default.
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = () => {
    const newTasks = [...tasks, inputField];
    //newTasks.push(inputField);
    setTasks(newTasks);
    setInput('');
    console.log(tasks);
  };

  const inputChangeHandler = (event) => { //Seteo continuo.
    setInput(event.target.value);
    console.log(event.target.value);
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
          <li>Cook</li>
          <li>Chill</li>
        </ul>
      </div>
    </>
  );
};

export default Home;

//Home.propTypes = {
//	title: PropTypes.string
//  };
