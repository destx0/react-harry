import React from 'react'



export default function TodoItem({todo, onDelete}) {
  return (
    <div>
        <h1>{todo.title}</h1>
        <h4>{todo.desc}</h4>
        <button className="btn-sm btn btn-danger" onClick={onDelete}>delete</button>
    </div>
  )
}
