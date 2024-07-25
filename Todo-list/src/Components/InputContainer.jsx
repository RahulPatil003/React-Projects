import React from 'react'

const InputContainer = ({inputVal , writeTodo, addTodo }) => {
  return (
    <div className='flex flex-wrap basis-[100%] w-screen bg-rec items-center justify-center align-center'>
      <div className="container flex flex-col  p-10 items-center justify-center ">
        <h1 className='text-2xl font-bold  underline'>Todo-list</h1>
        <div className="flex flex-row p-3 gap-2">
          <input className='text-xl border-2 p-2 border-black'type="text" placeholder='Enter the task' value={inputVal} onChange={writeTodo}/>
          <button className='border-2 border-black bg-white p-2' onClick={addTodo}>Add</button>
        </div>
        </div>
    </div>
  )
}

export default InputContainer
