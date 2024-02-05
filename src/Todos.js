import React from "react"
import Todo from "./Todo"
function Todos({ todos, toggleComplete, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export default Todos
