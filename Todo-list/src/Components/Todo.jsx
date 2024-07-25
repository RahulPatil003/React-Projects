import React from "react";

const Todo = ({todo,index,deleteTodo}) => {
  return (
    <div className="task-container flex flex-row p-3 flex-wrap gap-2 w-screen bg-rec items-center justify-center align-center ">
      <div className="task-container w-96 flex justify-between gap-2 border-2 border-black bg-white p-2">
        <div className="todo text-lg  flex ">
          <p key={todo}>{todo}</p>
        </div>
        <div className="action-buttons flex gap-2  ">
          <input className="order-last" type="checkbox" name="" id="" />
          <button className="border-2 rounded-xl border-black bg-red-400 p-0.5 order-last" onClick={()=> deleteTodo(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
