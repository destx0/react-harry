import React from 'react'



export default function TodoItem({todos}) {
  return (
    <div>
        <h1>{todos.title}</h1>
        <h4>{todos.desc}</h4>
        <button className="btn-sm btn btn-danger">delete</button>
    </div>
  )
}
