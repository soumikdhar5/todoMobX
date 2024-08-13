import {observer} from 'mobx-react';
import React, {useState} from 'react'

export const Todo = observer(({todoprops}) => {

    const [inputValue, setinputValue] = useState('')

    const addToDo =()=>{
        todoprops.addTodo(inputValue)
        setinputValue('')
    }

    const clearTodo =()=>{
        todoprops.clearTodo()
    }

  return (
    <div>
        <input 
        type='text'
        value={inputValue}
        onChange={(e)=>setinputValue(e.target.value)} />
        <input type='button' value='Submit' onClick={addToDo} />
        <input type='button' value='clear' onClick={clearTodo}/><p />
        {todoprops.todoArray.map((element, index)=><p key={element.id}>{element.todoText}</p>)}
    </div>
  )
})
