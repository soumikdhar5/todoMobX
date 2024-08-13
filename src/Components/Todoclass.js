import {action, makeObservable,observable} from 'mobx';
class Todoclass{

    todoArray =[]

    constructor(){
        makeObservable(this,{
            todoArray:observable,
            addTodo:action,
            clearTodo:action
        })
    }

    addTodo =(inputText)=>{
                const todoObject ={
            id:Math.random().toFixed(4)*1000,
            todoText:inputText
        }
        this.todoArray.push(todoObject)
    }

    clearTodo =()=>{
        this.todoArray = []
    }

}

export const todoclass = new Todoclass()