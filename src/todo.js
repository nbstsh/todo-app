import uuidv4 from 'uuidv4'

/*

todo object

    {
        id: ,
        text: ,
        completed: ,
    }

*/

let todos = []

const getTodos = () => todos

// load todos from local storage
const loadTodos = () => {
    const todosJson = localStorage.getItem('todos')
    todos = todosJson ? JSON.parse(todosJson) : []
}

// save todo to local storage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// add new todo to todo list and save 
const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

// toggle completed status of todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

// remove todo from todo list
const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    if (index > -1) {
        todos.splice(index, 1)
        saveTodos()
    }
}


loadTodos()


export { getTodos, saveTodos, createTodo, toggleTodo, removeTodo }

