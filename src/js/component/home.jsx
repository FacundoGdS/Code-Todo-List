import React from "react";

//Podría agregar un event-listener y de forma
//imperativa (DOM) generar un evento de "click"
//sobre el botón pero esto es REACT, seré declarativo.

const Home = () => {
  let task = [];

  const addTaskHandler = () => {
    altert('clickeaste');
  };
  
  const inputChangeHandler = () => {}
  
  return (
    <>
      <div className="text-center">
        <div>
          <h1>Todo-list</h1>
          <input onChange={null} type="text" placeholder="Write a task" />
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
