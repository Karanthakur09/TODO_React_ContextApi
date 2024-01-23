import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [

    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});//default value



//make your custom hook

export const useTodo = () => {
    return useContext(ToDoContext);//context dena pdega ki kiss cheez ke baare mai baat kr rhe hai
}

export const ToDoprovider = ToDoContext.Provider;
