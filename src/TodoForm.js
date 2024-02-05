import React, { useState } from "react"
import { toast } from "react-toastify"
import { v4 } from "uuid"
function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("")
  const [todo, setTodo] = useState([])
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (title.trim().length == 0) {
            toast("please enter value", { autoClose: 5000 })
            return
          }
          const newTodo = {
            id: v4(),
            title: title,
            completed: true,
          }
          addTodo(newTodo)
          setTitle("")
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default TodoForm
