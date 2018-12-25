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

const loadTodos = () => {
    const todosJson = localStorage.getItem('todos')
    todos = todosJson ? JSON.parse(todosJson) : []
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    if (index > -1) {
        todos.splice(index, 1)
        saveTodos()
    }
}



loadTodos()


export { getTodos, saveTodos, createTodo, toggleTodo, removeTodo }

