import React from "react"
import { ImCross } from "react-icons/im"

function Todo({ id, title, completed, toggleComplete, removeTodo }) {
  return (
    <div>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleComplete(id)
        }}
      />
      <button
        onClick={() => {
          removeTodo(id)
        }}
      >
        <ImCross />
      </button>
    </div>
  )
}

export default Todo
