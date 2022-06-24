import React from 'react'
import TodoItem from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className="container">
      <h3>todos list</h3>
      {/* {props.todos} */}
      <TodoItem todos={props.todos[0]}/>
    </div>
  )
}
