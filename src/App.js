import { useState } from "react"
import "./App.css"
import TodoForm from "./TodoForm"
import Todos from "./Todos"
import Todo from "./Todo"
import v4 from "uuid"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "HTML", completed: false },
    { id: 2, title: "CSS", completed: true },
    { id: 3, title: "JAVASCRIPT", completed: false },
  ])

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo])
  }
  const removeTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id)
    })
  }
  const toggleComplete = (id) => {
    // console.log(id, "toggle completed")
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed }
        else return todo
      })
    })
  }
  return (
    <div className="App">
      <ToastContainer />
      <h1 className="main-title">TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App
