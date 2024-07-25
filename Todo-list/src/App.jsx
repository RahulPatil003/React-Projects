import { useState } from 'react'
import InputContainer from './Components/InputContainer'
import TodoContainer from './Components/TodoContainer'
function App() {

  const [inputVal, setInputVal] = useState('')
  const [todos,setTodos] = useState([])
  function writeTodo(e){
    setInputVal(e.target.value)
    // console.log(e.target.value);
  }

  function addTodo(){
    if(inputVal!=''){
      setTodos((prevTodos) => [...prevTodos ,  inputVal])
      setInputVal('')
    }
  }
  console.log(todos)
  function deleteTodo(todoIndex){
    setTodos((prevTodos)=>
      prevTodos.filter((prevTodos, prevTodosIndex)=>{
        return prevTodosIndex!=todoIndex; 
      })
  );
  }
  return (
    <>
      <main className='border-2 border-black w-screen h-screen justify-center items-center bg-blue-100' >
        <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
       <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
      </main>
    </>
  )
} 

export default App
