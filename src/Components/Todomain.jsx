import React from 'react'
import { Todo } from './Todo'
import { todoclass } from './Todoclass'

export const Todomain = () => {
  return (
    <div>To Do List.
        <Todo todoprops={todoclass}/>
    </div>
  )
}
