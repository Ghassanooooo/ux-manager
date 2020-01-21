import React, { useState } from "react";
import { TaskList } from "./Components";
import initialState from "./appInitialState";

const  App = () => {
  const [state,setState]= useState(initialState)
 
 const onDrop=(item, targetId)=> {
    setState(state => {
      return {
        tasks: [
          ...state.tasks.map(task => task),
          { ...item, listId: targetId }
        ]
      };
    });
  }

 

  // Render each list
  const renderLists =()=> {
    const { lists, tasks } = state;
    return lists.map(list => (
      <TaskList
        key={list}
        id={list}
        tasks={tasks.filter(t => t.listId === list)}
        onDrop={onDrop}
      />
    ));
  }

  // Render App
 
    return (
      <div style={{ display: "flex", minHeight: "200px" }}>
        {renderLists()}
      </div>
    );

}

export default App;

